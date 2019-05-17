<template>
  <div class="home">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
    </div> -->

    <NodeTree v-if="nodes" @view="(v) => { view = v }" :nodes="nodes" class="full svg-box" ref="editor">
    </NodeTree>

    <PreviewBox></PreviewBox>

    <div class="corner-layer">
      <button @click="$refs['editor'].cleanLayout({ instant: false, goHome: true, resetZoom: true })">Reset Layout</button>
      <button @click="$refs['editor'].zoomBa({ to: 2.5 })">Map View</button>
      <button @click="$refs['editor'].zoomBa({ to: 1 })">Normal</button>
    </div>

  </div>
</template>

<script>
import { setTimeout } from 'timers'
// @ is an alias to /src
export default {
  name: 'home',
  components: {
    NodeTree: require('../llsvg/NodeTree.vue').default,
    PreviewBox: require('../llui/PreviewBox.vue').default
  },
  data () {
    return {
      view: {
        x: 0,
        y: 0
      },
      nodes: false
    }
  },
  mounted () {
    let root = [
      {
        '_id': 'root',
        'title': 'Your 3D App',
        'to': null,
        'pos': {
          'x': 152,
          'y': 61
        }
      }
    ]
    let nodesForHome = require('../llsvg/nodes.json')
    let pages = require('../llsvg/pages.json')
    setTimeout(() => {
      this.nodes = [
        ...root,
        ...pages,
        ...nodesForHome
      ]
    }, 150)

    let i = 0

    setInterval(() => {
      i = i + 1

      // let newItem = {
      //   '_id': i + 'FunPage',
      //   'title': 'Fun Page',
      //   'to': pages[i % pages.length]._id,
      //   pos: { x: 0, y: 0 },
      //   size: { x: 1, y: 1 }
      // }
      // this.nodes.push(newItem)

      // this.$nextTick(() => {
      //   this.$refs['editor'].cleanLayout({ instant: true, goHome: false, resetZoom: false })
      // })
    }, 1500)
  },
  methods: {
    zoomBa (args) {
      [
        this.$refs.editor
      ].$emit('do', { action: 'zoomBa', args })
    }
  }
}
</script>

<style lang="css" scoped>
.home{
  height: 100%;
  width: 100%;
  overflow: hidden;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */

.corner-layer{
  position: absolute;
  top: 0px;
  right: 0px;
}
.svg-box{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 50%;
}

@media screen and (min-width: 767px) {
  .svg-box{
    height: 100%;
    width: calc(100%);
  }
}
</style>
