<template>
  <div class="full">
    <transition v-if="water" name="fade">
      <iGraph v-if="water" @codefork="onCodeFork" @save="(v) => { onSave(v) }" :initWater="water" :modes="{ isEditor: true }"></iGraph>
    </transition>
    <transition name="fade" v-else-if="water === false">
      <div class="water-is-loading" v-if="water === false">
        <div>
          Loading Editor....
        </div>
      </div>
    </transition>
    <transition name="fade" v-else-if="water === null">
      <div class="water-not-found" v-if="water === null">
        <div>
          Project Not Found...
        </div>
        <div>
          <router-link to="/">Home</router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import _ from 'lodash'
import * as API from '../api/api'
export default {
  components: {
    iGraph: () => import(/* webpackChunkName: "igraph" */'./iGraph.vue')
  },
  data () {
    return {
      myself: false,
      graph: false,
      water: false
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    onSave: _.debounce(async function ({ obj, done }) {
      if (this.graph && this.graph._id === this.myself._id) {
        let water = obj
        let base64gzip = await API.ZIP(JSON.stringify(water))

        let data = {
          ...this.graph,
          base64gzip
        }

        await API.updateGraph({ data })
        done()
        console.log('updated', data)
      }
    }, 1000),
    async load () {
      this.myself = await API.getMyself()
      try {
        let graph = this.graph = await API.getGraph({ graphID: this.$route.params.graphID })
        if (graph) {
          this.water = JSON.parse(await API.UNZIP(graph.base64gzip))
        }
      } catch (e) {
        this.water = null
        console.log(e)
      }
    },
    async onCodeFork ({ water }) {
      let base64gzip = await API.ZIP(JSON.stringify(water))
      let data = {
        userID: this.myself._id,
        title: this.graph.title,
        fromGraphID: this.graph._id,
        fromUserID: this.graph.userID,
        base64gzip
      }

      let newGraph = await API.createIGraph({ data })
      window.alert('You just forked the project')
      window.location.assign(`/iGraph-Editor/${newGraph._id}`)
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
</style>
