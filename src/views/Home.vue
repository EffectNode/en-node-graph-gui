<template>
  <div class="home">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
    </div> -->

    <NodeTree v-if="nodes" @view="(v) => { view = v }" @onNodeClick="onNodeClick" :nodes="nodes" class="full svg-box" ref="editor">
    </NodeTree>

    <UITools></UITools>
    <UIPanel></UIPanel>
    <UIPreviewBox>
    </UIPreviewBox>
    <UIInspector v-if="open.inspector" @close="open.inspector = false">
      <UIControls :nodes="nodes" :node="node"></UIControls>
    </UIInspector>

  </div>
</template>

<script>
import { setTimeout } from 'timers'
// @ is an alias to /src
export default {
  name: 'home',
  components: {
    NodeTree: require('../llsvg/NodeTree.vue').default,
    UIPreviewBox: require('../llui/UIPreviewBox.vue').default,
    UIControls: require('../llui/UIControls.vue').default,
    UIInspector: require('../llui/UIInspector.vue').default,
    UIPanel: require('../llui/UIPanel.vue').default,
    UITools: require('../llui/UITools.vue').default
  },
  data () {
    return {
      open: {
        inspector: false
      },
      view: {
        x: 0,
        y: 0
      },
      node: false,
      nodes: false
    }
  },
  mounted () {
    let root = [
      {
        '_id': 'root',
        'title': 'Your 3D App',
        'protected': true,
        'to': null,
        'pos': {
          'x': 152,
          'y': 61
        }
      },
      {
        '_id': 'camera',
        'title': 'Camera',
        'to': 'homepage',
        'pos': {
          'x': 72,
          'y': 249
        }
      }
      // {
      //   '_id': 'mat',
      //   'title': 'Materials',
      //   'to': 'root',
      //   'pos': {
      //     'x': 152,
      //     'y': 61
      //   }
      // },
      // {
      //   '_id': 'engine',
      //   'title': 'Engine',
      //   'to': 'root',
      //   'pos': {
      //     'x': 152,
      //     'y': 61
      //   }
      // },

      // {
      //   '_id': 'shared',
      //   'title': 'Shared Items',
      //   'to': 'root',
      //   'pos': {
      //     'x': 152,
      //     'y': 61
      //   }
      // },
      // {
      //   '_id': 'scene',
      //   'title': 'Scenes',
      //   'to': 'root',
      //   'pos': {
      //     'x': 152,
      //     'y': 61
      //   }
      // }
    ]
    // let materials = [
    //   {
    //     '_id': 'mat.simple',
    //     'title': 'Simple Material',
    //     'to': 'mat',
    //     'pos': {
    //       'x': 72,
    //       'y': 249
    //     }
    //   }
    // ]
    // let shared = [
    //   {
    //     '_id': 'home.nagigation',
    //     'title': 'NavBar',
    //     'to': 'shared',
    //     'pos': {
    //       'x': 72,
    //       'y': 249
    //     }
    //   },
    //   {
    //     '_id': 'nav.logo',
    //     'title': 'Logo',
    //     'to': 'home.nagigation',
    //     'pos': {
    //       'x': 72,
    //       'y': 249
    //     }
    //   },
    //   {
    //     '_id': 'home.menu',
    //     'title': 'Menu',
    //     'to': 'shared',
    //     'pos': {
    //       'x': 72,
    //       'y': 249
    //     }
    //   }
    // ]
    // let engineItems = [
    //   {
    //     '_id': 'webgl.renderer',
    //     'title': 'Renderer',
    //     'to': 'engine',
    //     'pos': {
    //       'x': 72,
    //       'y': 249
    //     }
    //   },

    //   {
    //     '_id': 'webgl.effect',
    //     'title': 'Effect Composer',
    //     'to': 'engine',
    //     'pos': {
    //       'x': 72,
    //       'y': 249
    //     }
    //   }
    // ]
    let nodesForHome = require('../llsvg/nodes.json')
    let pages = require('../llsvg/pages.json')
    setTimeout(() => {
      this.nodes = [
        ...root,
        ...pages,
        ...nodesForHome
        // ...shared,
        // ...engineItems,
        // ...materials
      ]
        .filter(n => !n.trashed)
        .filter(n => !n.hidden)
    }, 150)

    // let i = 0
    // setInterval(() => {
    //   i = i + 1

    //   // let newItem = {
    //   //   '_id': i + 'FunPage',
    //   //   'title': 'Fun Page',
    //   //   'to': pages[i % pages.length]._id,
    //   //   pos: { x: 0, y: 0 },
    //   //   size: { x: 1, y: 1 }
    //   // }
    //   // this.nodes.push(newItem)

    //   // this.$nextTick(() => {
    //   //   this.$refs['editor'].cleanLayout({ instant: true, goHome: false, resetZoom: false })
    //   // })
    // }, 1500)
  },
  methods: {
    onNodeClick ({ node, nodes }) {
      console.log(node, nodes)
      this.node = node
      this.open.inspector = true
    },
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

.svg-box{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 60%;
}

@media screen and (min-width: 767px) {
  .svg-box{
    height: 100%;
    width: 100%;
  }
}
</style>
