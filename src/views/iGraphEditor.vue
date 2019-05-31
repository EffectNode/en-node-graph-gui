<template>
  <div class="full">
    <iGraph v-if="water" @save="(v) => { onSave(v) }" :initWater="water"></iGraph>
    <div class="water-not-found" v-else-if="water === null">
      <div>
        Project Not Found...
      </div>
      <div>
        <router-link to="/">Home</router-link>
      </div>
    </div>
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
      graph: false,
      water: false
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    onSave: _.debounce(async function ({ obj, done }) {
      if (this.graph) {
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
    }, 750),
    async load () {
      try {
        let graph = this.graph = await API.getGraph({ graphID: this.$route.params.graphID })
        if (graph) {
          this.water = JSON.parse(await API.UNZIP(graph.base64gzip))
        }
      } catch (e) {
        this.water = null
        console.log(e)
      }
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
</style>
