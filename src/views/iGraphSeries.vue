<template>
  <div>
    <StickyNav  :at="'secure'">
    </StickyNav>
    <div class="row">
      <div class="cute-12-tablet">
        <div class="main-title">
          <span>
            Remixes
          </span>
        </div>
      </div>
    </div>
    <div class="row" v-if='main'>
      <div class="cute-12-tablet">
      </div>
    </div>
    <div class="row">
      <div class="cute-4-tablet">
        <h2 class="letscreate">
          Go Back to
        </h2>
        <div class="goback">
          <router-link to="/myhome">My Home</router-link>
        </div>
      </div>
      <div class="cute-8-tablet">
        <h3 v-if="!series">
          Loading Projects...
        </h3>
        <h3 v-if="series && series.length === 0">
          The Space is Empty. Let's get creative. :D
        </h3>
        <div v-if="series && series.length > 0">

          <div class="project-item" :key="graph._id" v-for="graph in series">
            <div class="project-item-line"></div>
            <div class="project-item-ball"></div>
            <div class="movie" ref="movie" @click="series.forEach(graph => graph.playing = false); graph.playing = true;">
              <EXEC v-if="graph.water && graph.playing" :water="graph.water"></EXEC>
              <div class="clicktoplay" v-show="!graph.playing">
                Click to Run 3D Animation
              </div>
            </div>
            <div class="row">
              <div class="cute-12-tablet">
                <input type="text"  :style="{ 'text-decoration': graph.trashed ? 'line-through' : '' }" @keydown="updateGraphMeta({ graph })" class="newtitleinput" v-model="graph.title">
              </div>
            </div>
            <div class="row">
                <div class="cute-12-tablet"  style="display: flex; justify-content: flex-end;">
                  <div class="p-btn-icon nohover nohighlight" v-if="graph.isRoot">
                    <span class="v-center">
                      First Project <img src="../icons/code-fork-black.svg" title="First Project" alt="First Project">
                    </span>
                  </div>
                  <div class="p-btn-icon nohover nohighlight">
                    <span class="v-center">
                      <span>Edited {{ moment(graph.updatedAt).fromNow() }} </span>
                      <span>, Created At</span>
                      <span>: {{ moment(graph.createdAt).format('YYYY-MM-DD') }}</span>
                      <img src="../icons/clock.svg" :title="moment(graph.createdAt)" :alt="moment(graph.createdAt)">
                    </span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="cute-12-tablet p-btns">
                  <!-- <div class="p-btn-icon">
                    <span class="v-center" v-if="!!w.isPrivate" @click="w.isPrivate = !w.isPrivate; $forceUpdate(); updateGraphMeta({ graph: w })">
                      Private <img src="../icons/switch-on.svg" title="Project is Private" alt="Project is Private">
                    </span>
                    <span class="v-center" v-if="!w.isPrivate" @click="w.isPrivate = !w.isPrivate; $forceUpdate(); updateGraphMeta({ graph: w })">
                      Private <img src="../icons/switch-off.svg" title="Project is Private" alt="Project is Private">
                    </span>
                  </div> -->

                  <div class="p-btn-icon">
                    <span class="v-center" @click="$router.push(`/iGraph-Editor/${graph._id}`)"> Edit
                      <img src="../icons/edit-dark.svg" title="edit" alt="edit movie">
                    </span>
                  </div>

                  <div class="p-btn-icon">
                    <span class="v-center" @click="forkGraph({ graph, water: graph.water })" >
                      Clone
                      <img src="../icons/clone.svg" title="edit" alt="edit movie">
                    </span>
                  </div>

                  <div class="p-btn-icon">
                    <span class="v-center" v-if="!graph.trashed" @click="graph.trashed = true" >Remove
                      <img src="../icons/trash-dark.svg" v-if="!graph.trashed" title="remove" alt="remove movie">
                    </span>
                    <span class="v-center confirm" v-if="graph.trashed" @click="delGraph({ water: w })" >Confirm
                      <img src="../icons/trash-red.svg" v-if="graph.trashed" title="remove" alt="remove movie">
                    </span>
                  </div>

                </div>
              </div>
          </div>
        </div>

      </div>
    </div>

    <!-- <pre>{{ series }}</pre> -->
  </div>
</template>

<script>
import * as API from '../api/api'
import _ from 'lodash'
import moment from 'moment'
export default {
  components: {
    StickyNav: () => import(/* webpackChunkName: "landing" */ '../components/StickyNav.vue'),
    EXEC: () => import(/* webpapckChunkName: "myhome" */ '../llexec/EXEC.vue')
  },
  data () {
    return {
      moment,
      main: false,
      myself: false,
      series: false
    }
  },
  computed: {
    sourceGraphID () {
      return this.$route.params.graphID
    }
  },
  async mounted () {
    this.myself = await API.getMyself()
    await this.loadSeries()
  },
  methods: {
    updateGraphMeta: _.debounce(async function ({ graph }) {
      let newGraph = JSON.parse(JSON.stringify(graph))
      // remove heavy signals
      delete newGraph.water
      delete newGraph.base64gzip

      await API.updateGraph({ data: newGraph })
    }, 100),
    async loadSeries () {
      let myself = this.myself || await API.getMyself()
      this.myself = myself
      let list = await API.getMyGraphSeries({ userID: this.myself._id, sourceGraphID: this.sourceGraphID, perPage: 99, pageAt: this.pageAt })
      this.series = await Promise.all(list.map(async (l) => {
        l.water = JSON.parse(await API.UNZIP(l.base64gzip))
        return {
          playing: null,
          trashed: false,
          ...l
        }
      }))

      this.series.forEach(l => {
        l.playing = false
      })
      if (this.series[0]) {
        this.series[0].playing = true
      }
      if (this.series.find(s => s.isRoot)) {
        this.main = this.series.find(s => s.isRoot)
      }

      this.$forceUpdate()
    }
  }
}
</script>

<style scoped>
.movie{
  width: 100%;
  height: 270px;
  border: rgb(179, 179, 179) solid 1px;
  cursor: pointer;
  margin-bottom: 15px;
}

.project-item{
  margin-bottom: 50px;
}
.clicktoplay{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.movie-sub-title{
  font-size: 30px;
}
.movie-title{
  font-size: 40px;
  text-align: left;
  margin-bottom: 7px;
}
.underline{
  font-size: 17px;
  text-decoration: underline;
  cursor: pointer;
}
.ta-right{
  text-align: right;
}
.timer{
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.timer img{
  margin: 5px;
}
.goback a,
.goback a:visited,
.goback a:active{
  color: black;
}

.action-entry{
  display: flex;
  align-items: center;
  margin-bottom: 14px;
}
.icon{
  display: inline-block;
  height: 40px;
  width: 40px;
  cursor: pointer;
  margin-right: 4px;
}
.action-sub-item{
  display: inline-block;
  height: 40px;
  line-height: 40px;
  font-size: 23px;
  cursor: pointer;
}
.action-entry:hover .action-sub-item{
  text-decoration: underline;
}

.newtitleinput{
  appearance: none;
  border: 1px solid transparent;
  border-bottom: 1px solid rgb(20, 20, 20);
  color: rgb(20, 20, 20);
  font-size: inherit;
  margin-left: 0px;
  overflow: hidden;
  padding: 5px 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: calc(100%);
  margin-bottom: 5px;
  border-radius: 0px;
}
.newtitleinput:focus{
  outline: transparent solid 0px;
}
.newtitleinput::-webkit-input-placeholder{
  color: rgb(43, 43, 43);
}

.movie{
  width: 100%;
  height: 270px;
  border: rgb(179, 179, 179) solid 1px;
  cursor: pointer;
  margin-bottom: 15px;
}

.project-item{
  margin-bottom: 50px;
}

/* .p-name{
  display: inline-block;
  width: calc(100% - 400px);
} */
.p-btns{
  display: inline-flex;
  width: 400px;
  justify-content: flex-end;
}
.p-btn-icon{
  padding: 7px 7px;
  border-radius: 30px;
  box-shadow: 0px 0px 30px 0px #eee;
  background-color: #eee;
  transition: transform 0.1s;
}
.p-btn-icon:hover{
  cursor: pointer;
  transform: scale(1.2);
}
.p-btn-icon.nohover{
  cursor: auto;
  transform: scale(1);
}
.nohighlight{
  box-shadow: none;
  background-color: transparent;
}
.p-btn-icon > img{
  height: 30px;
}
.movie-ctrl{
  display: flex;
  align-items: center;
}
.clicktoplay{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.p-btn-icon{
  margin: 0px 5px;
  margin-right: 0px;
}

.v-center{
  height: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.v-center.confirm{
  color: red;
}
.v-center > img {
  margin-left: 5px;
}
.v-center > a:active,
.v-center > a:visited,
.v-center > a {
  color: black;
  text-decoration: none;
}
.v-center:hover > a{
  color: black;
  text-decoration: underline;
}
.p-cloned{
  display: inline-block;
  width: 40px;
}
.orig-ico{
  height: 20px;
}

@import url(./css/idot.css);
</style>
