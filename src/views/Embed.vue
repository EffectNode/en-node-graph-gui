<template>
  <div class="full">
    <EXEC v-if="water" :water="water"></EXEC>
  </div>
</template>

<script>
import * as API from '../api/api.js'
export default {
  components: {
    EXEC: () => import(/* webpapckChunkName: "myhome" */ '../llexec/EXEC.vue')
  },
  data () {
    return {
      water: false
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    async load () {
      let graph = this.graph = await API.getGraph({ graphID: this.$route.params.graphID })
      if (graph) {
        this.water = JSON.parse(await API.UNZIP(graph.base64gzip))
      }
    }
  },
  beforeDestroy () {
  }
}
</script>

<style>
#nprogress{
 display: none;
}
</style>

<style scoped>
.full{
  width: 100%;
  height: 100%;
}
</style>
