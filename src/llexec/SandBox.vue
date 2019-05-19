<template>
  <div class="app-entry-dom">
    <GraphScene @scene="(scene) => { sceneMap[gs._id] = scene }" :key="gs._id" v-for="gs in scenes">
      <GraphNode :key="node._id" v-for="node in gnodes"></GraphNode>
    </GraphScene>
    <WebGLRenderer></WebGLRenderer>
  </div>
</template>

<script>
import WebGLRenderer from './WebGLRenderer.vue'
export default {
  components: {
    WebGLRenderer
  },
  props: {
    water: {}
  },
  data () {
    return {
      scenes: [],
      gnodes: [],
      sceneMap: {},
      show: this.water.nodes.find(n => n.type === 'scene')._id
    }
  },
  mounted () {
  },
  methods: {
    syncProp () {
      this.scenes = this.water.nodes.filter(n => n.type === 'scene')
      this.gnodes = this.water.nodes.filter(n => n.type === 'gnode')
    }
  }
}
</script>

<style>
body, html, .app-entry-dom, .full{
  width: 100%;
  height: 100%;
}
html{
  overflow: hidden;
}
body{
  margin: 0px;
}
.app-entry-dom {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<style scoped>

</style>
