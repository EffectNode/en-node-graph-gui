<template>
  <div class="myhome">
    <StickyNav  :at="'secure'">
    </StickyNav>
    <div class="row">
      <div class="cute-100">
        <div class="welcomehome">
          Welcome Home.
        </div>
        <p v-if="myself">
          @{{ myself.username }}
        </p>
      </div>
    </div>
    <div class="row">
      <div class="cute-4-tablet">
        <div class="create-area">
          <h2 class="letscreate">
            Let's Create:
          </h2>
          <div class="newtitle">
          </div>
          <div class="action-entry">
            <img class="icon" src="../icons/add-circle.svg" alt=""  @click="addIGraphs()">
            <div class="action-sub-item">
              <input type="text" @keydown.enter="addIGraphs()" placeholder="a new Project..."  class="newtitleinput" v-model="newTitle">
            </div>
          </div>
        </div>
      </div>

      <div class="cute-8-tablet">
        <div class="projects-area">
          <h2 class="myprojects">
            My Projects:
          </h2>
          <h3 v-if="list.length === 0">
            The Space is Empty. Let's get creative. :D
          </h3>
          <div class="projectlist">
            <div class="project-item" ref="boxes" :key="w._id" v-for="(w) in list">
              <div class="movie" ref="movie" @click="list.forEach(w => w.playing = false); w.playing = true;">
                <EXEC v-if="w.water && w.playing" :water="w.water"></EXEC>
                <div class="clicktoplay" v-show="!w.playing">
                  Click to Run 3D Animation
                </div>
              </div>
              <div class="row">
                <div class="cute-6-tablet">
                  <input type="text"  :style="{ 'text-decoration': w.trashed ? 'line-through' : '' }" @keydown="updateGraph({ water: w })" class="newtitleinput" v-model="w.title">
                </div>

                <div class="cute-6-tablet p-btns">

                  <div class="p-btn-icon">
                    <span class="v-center" @click="$router.push(`/iGraph-Editor/${w._id}`)"> Edit
                      <!-- <router-link :to="`/iGraph-Editor/${w._id}`">Edit</router-link> -->
                      <img src="../icons/edit-dark.svg" title="edit" alt="edit movie">
                    </span>
                  </div>

                  <div class="p-btn-icon nohover nohighlight" v-if="w.fromGraphID">
                    <span class="v-center">
                      <img src="../icons/shuffle.svg" title="This is a Cloned and Remixed Project" alt="This is a Cloned and Remixed Project">
                      <!-- <router-link :to="`/iGraph-Editor/${w._id}`">Edit</router-link> -->
                    </span>
                  </div>
                  <div class="p-btn-icon">
                    <span class="v-center" @click="forkGraph({ graph: w, water: w.water })" >
                      Clone
                      <img src="../icons/clone.svg" title="edit" alt="edit movie">
                    </span>
                  </div>

                  <div class="p-btn-icon">
                    <span class="v-center" v-if="!w.trashed" @click="w.trashed = true" >Remove
                      <img src="../icons/trash-dark.svg" v-if="!w.trashed" title="remove" alt="remove movie">
                    </span>
                    <span class="v-center confirm" v-if="w.trashed" @click="delGraph({ water: w })" >Confirm
                      <img src="../icons/trash-red.svg" v-if="w.trashed" title="remove" alt="remove movie">
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- <EXEC v-if="water" :water="water"></EXEC> -->
  </div>
</template>

<script>
import * as API from '../api/api'
import _ from 'lodash'
export default {
  components: {
    StickyNav: () => import(/* webpackChunkName: "landing" */ '../components/StickyNav.vue'),
    EXEC: () => import(/* webpapckChunkName: "myhome" */ '../llexec/EXEC.vue')
  },
  data () {
    return {
      newTitle: '',
      water: false,
      myself: false,
      list: [],
      pageAt: 0,
      perPage: 4
    }
  },
  mounted () {
    this.loadMyGraphs()
  },
  methods: {
    logout () {
      API.logout()
      this.$router.push('/')
    },
    async forkGraph ({ graph, water }) {
      let myself = this.myself || await API.getMyself()
      this.myself = myself

      await API.forkGraph({ water, graph, myself })
      this.loadMyGraphs()
    },
    async delGraph ({ water }) {
      if (water.title === window.prompt(`Please copy and paste "${water.title}" to delete.`)) {
        let newWater = JSON.parse(JSON.stringify(water))
        await API.delGraph({ data: newWater })
        this.loadMyGraphs()
      } else {
        water.trashed = false
      }
    },
    updateGraph: _.debounce(async function ({ water }) {
      let newWater = JSON.parse(JSON.stringify(water))
      delete newWater.water
      delete newWater.base64gzip

      await API.updateGraph({ data: newWater })
    }, 300),
    async loadMyGraphs () {
      let myself = this.myself || await API.getMyself()
      this.myself = myself
      let list = await API.getMyGraphs({ userID: myself._id, pageAt: this.pageAt, perPage: this.perPage })
      this.list = await Promise.all(list.map(async (l) => {
        l.water = JSON.parse(await API.UNZIP(l.base64gzip))
        return {
          playing: null,
          trashed: false,
          ...l
        }
      }))
      this.list.forEach(l => {
        l.playing = false
      })
      this.$forceUpdate()
      console.log(this.list)
      console.log(myself)
    },
    async addIGraphs () {
      let myself = this.myself || await API.getMyself()
      this.myself = myself
      let water = await import('../llui/water/starter-poster-dome-spikes.json')
      let base64gzip = await API.ZIP(JSON.stringify(water.default))
      let data = {
        userID: myself._id,
        title: this.newTitle || 'my new',
        base64gzip
      }

      await API.createIGraph({ data })
      this.newTitle = ''
      this.loadMyGraphs()
    }
  }
}
</script>

<style scoped>
.myhome{
  width:100%;
}
.welcomehome{
  font-size: 50px;
}
.letscreate{
  margin-bottom: 30px;
}
.myprojects{
  margin-bottom: 30px;
}
.logout{
  text-decoration: underline;
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
  border-bottom: 3px solid rgb(0, 0, 0);
  color: rgb(43, 43, 43);
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

.newtitleinput::-webkit-input-placeholder{
  color: rgb(43, 43, 43);
}

.movie{
  width: 100%;
  height: 270px;
  border: #eee solid 1px;
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
  margin: 0px 12px;
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
</style>
