<template>
  <div class="app-entry-dom" v-if="nodes">
    <GraphNode :nodeMap="nodeMap" :nodes="activeNodes" :node="node" :key="node._id" v-for="node in activeNodes"></GraphNode>
  </div>
</template>

<script>
import GraphNode from './GraphNode.vue'
// import * as Node from '../llsvg/node.js'
export default {
  components: {
    GraphNode
  },
  props: {
    water: {}
  },
  computed: {
    nodes () {
      return this.water.nodes
    },
    activeNodes () {
      return this.nodes.filter(a => !a.trashed).slice()
    }
  },
  watch: {
    water () {
    }
  },
  data () {
    return {
      nodeMap: {}
    }
  },
  mounted () {
  },
  methods: {
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

  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>

<style scoped>

</style>
