<template>
  <div class="full">
    <transition name="fade">
      <iGraph v-if="water" ref="igraph" @codefork="onCodeFork" @save="(v) => { onSave(v) }" :initWater="water" :modes="modes"></iGraph>
      <div class="water-is-loading" v-else-if="water === false">
        <div>
          Loading Editor....
        </div>
      </div>
      <div class="water-not-found" v-else-if="water === null">
        <div>
          Project Not Found...
        </div>
        <div>
          <router-link to="/">Home</router-link>
        </div>
      </div>
    </transition>
    <div class="overlay overlay-fonts" v-if="overlays.isForking">
      <div v-if="fork === 'ing'">
        Cloning to a Remix Project
      </div>
      <div v-if="fork === 'done'">
        Project Remix Cloned
      </div>
    </div>
    <!-- <div class="overlay" v-if="overlays.cannotSave">
      <div class="overlay-fonts">
        You cannot edit this project.
      </div>
      <div class="overlay-fonts">
        Let's Clone & Remix?
      </div>
      <div>
        <div class="btn-omg" @click="onCloneZeroEdit()">
          Yes 🥳
        </div>
        <div class="btn-omg" @click="onSetViewOnly()">
          No, I want to view only.
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import _ from 'lodash'
import * as API from '../api/api'
import NProgress from 'nprogress'
export default {
  components: {
    iGraph: () => import(/* webpackChunkName: "igraph" */'./iGraph.vue')
  },
  data () {
    return {
      fork: 'ing', // or done
      modes: {
        isAuthenticated: false,
        isEditor: true,
        viewOnly: false
      },
      overlays: {
        isForking: false,
        cannotSave: false
      },
      myself: false,
      graph: false,
      water: false
    }
  },
  mounted () {
    this.load()
    this.loadMyself()
  },
  methods: {
    onSave: _.debounce(async function ({ obj, done }) {
      if (this.graph && this.graph.userID === this.myself._id) {
        NProgress.start()
        let water = obj
        let base64gzip = await API.ZIP(JSON.stringify(water))

        let data = {
          ...this.graph,
          base64gzip
        }

        await API.updateGraph({ data })
        done()
        console.log('updated', data)
        NProgress.done()
      } else if (this.graph && this.graph.userID !== this.myself._id && this.myself && this.myself._id) {
        // NProgress.done()
        this.isOffline = true
        if (!this.modes.viewOnly) {
          this.overlays.cannotSave = true
        }
      }
    }, 1000),
    onSetViewOnly () {
      this.overlays.cannotSave = false
      this.modes.viewOnly = true
      // this.$router.push('/myhome')
    },
    async loadMyself () {
      try {
        this.myself = await API.getMyself()
        this.modes.isLoggedIn = true
      } catch (e) {
        this.modes.isLoggedIn = false
        this.modes.viewOnly = true
        console.log(e)
      }
    },
    async load () {
      try {
        let graph = this.graph = await API.getGraph({ graphID: this.$route.params.graphID })
        if (graph) {
          this.water = JSON.parse(await API.UNZIP(graph.base64gzip))
        }
        if (this.myself) {
          if (graph.userID !== this.myself._id) {
            this.modes.viewOnly = true
          }
        } else {
          this.modes.viewOnly = true
        }
      } catch (e) {
        this.water = null
        console.log(e)
      }
    },
    async onCloneZeroEdit () {
      let water = await this.$refs.igraph.getWater()
      this.overlays.cannotSave = false
      this.onCodeFork({ water })
    },
    async onCodeFork ({ water }) {
      this.overlays.isForking = true
      this.fork = 'ing'
      let newGraph = await API.forkGraph({ water, myself: this.myself, graph: this.graph })
      this.fork = 'done'
      setTimeout(() => {
        window.location.assign(`/iGraph-Editor/${newGraph._id}`)
      }, 500)
    }
  },
  beforeDestroy () {
    clearInterval(this.autoSaveTimer)
  }
}
</script>

<style scoped>
.smaller{
  height: 768px;
  max-width: 1280px;
  margin: 40px auto;
  border: #363636 solid 1px;;
}
.water-not-found{
  height: 100%;
  font-size: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.water-is-loading{
  height: 100%;
  font-size: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.overlay{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  background-color: rgba(0, 0, 0, 0.801);
  z-index: 1000;
}
.overlay-fonts{
  font-size: 40px;
}
.btn-omg{
  display: inline-block;
  font-size: 20px;
  margin: 10px;
  border: white solid 1px;
  padding: 20px;
}
</style>
