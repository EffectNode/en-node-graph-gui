<template>
  <div class="home">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
    </div> -->

    <NodeTree v-if="nodes" :show="show" @view="(v) => { view = v }" @onNodeClick="onNodeClick" :nodes="dynamic(show, nodes)" class="full svg-box" ref="editor">
    </NodeTree>

    <UIBtnTools v-if="nodes" :show="show" @show="show = $event" :nodes="nodes" @onChangeView="$emit('onChangeView', $event)" :node="node" ></UIBtnTools>
    <UIPreviewBox v-if="nodes" @run="onReload()">
      <EXEC ref="exec" mode="preview" :nodes="nodes"></EXEC>
    </UIPreviewBox>
    <UIInspector v-if="open.inspector" @close="onClose">
      <UIControls @openCoder="openCoder" :nodes="nodes" @onLayout="$emit('onLayout', $event)" @close="onClose" :node="node" @nodes="nodes = $event" @show="show = $event"></UIControls>
    </UIInspector>

    <UICoder v-if="open.coder" @close="open.coder = false; $forceUpdate()">
      <UICodeControl @reload="onReload()" :nodes="nodes" @onLayout="$emit('onLayout', $event)" @close="onCloseCoder" :node="node" @nodes="nodes = $event" @show="show = $event"></UICodeControl>
    </UICoder>

  </div>
</template>

<script>
import { setTimeout, setInterval, clearInterval } from 'timers'
// @ is an alias to /src
export default {
  name: 'home',
  components: {
    EXEC: require('../llexec/EXEC.vue').default,

    NodeTree: require('../llsvg/NodeTree.vue').default,
    UIPreviewBox: require('../llui/UIPreviewBox.vue').default,
    UICodeControl: require('../llui/UICodeControl.vue').default,
    UIControls: require('../llui/UIControls.vue').default,
    UIInspector: require('../llui/UIInspector.vue').default,
    UICoder: require('../llui/UICoder.vue').default,
    UIBtnTools: require('../llui/UIBtnTools.vue').default
  },
  data () {
    return {
      show: 'normal',
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
  watch: {
  },
  mounted () {
    window.getNODES = () => {
      return this.nodes
    }

    console.log(`copy(window.getNODES())`)

    // let root = [
    //   {
    //     '_id': 'root',
    //     'title': 'Your 3D App',
    //     'protected': true,
    //     'cannotDrop': true,
    //     'acceptDrop': ['pages'],
    //     'isRoot': true,
    //     'type': 'root',
    //     'to': null,
    //     'pos': {
    //       'x': 152,
    //       'y': 61
    //     }
    //   }
    // ]
    // let nodesForHome = require('../llsvg/nodes.json')
    // let pages = require('../llsvg/pages.json')
    setTimeout(() => {
      // this.nodes = [
      //   ...root,
      //   ...pages,
      //   ...nodesForHome
      // ]
      this.nodes = require('../llui/versions/diamond-06.json')
      let str = localStorage.getItem('nodes')
      if (str) {
        this.nodes = JSON.parse(str)
      }

      this.tt = setInterval(() => {
        console.log('saving....')
        localStorage.setItem('nodes', JSON.stringify(this.nodes))
      }, 1000)

      // this.$refs.editor.computeLayout({  })
    }, 150)
  },
  created () {
    this.$on('onLayout', ({ node, nodes, args = {} }) => {
      nodes.forEach((node) => {
        node.pos.x += 0.00001
        node.pos.y += 0.00001
      })
      this.$refs.editor.$emit('do', {
        action: 'cleanLayout',
        args: {
          instant: false,
          goHome: false,
          resetZoom: false,
          ...args
        }
      })
    })
  },
  beforeDestroy () {
    clearInterval(this.tt)
  },
  methods: {
    openCoder () {
      this.open.coder = true
      this.$forceUpdate()
    },
    onReload () {
      console.log(`copy(window.getNODES())`)
      this.$refs.exec.$emit('run')
    },
    onClose () {
      this.open.inspector = false
      this.$nextTick(() => {
        this.open.coder = false
        this.$forceUpdate()
      })
      this.$forceUpdate()
    },
    onCloseCoder () {
      this.open.coder = false
    },
    dynamic (show, nodes) {
      let h = {}
      h.normal = (nodes) => {
        return nodes
          .filter(n => !n.trashed)
          .filter(n => !n.hidden)
      }
      h.trashed = (nodes) => {
        return nodes
          .filter(n => n.trashed)
      }
      return h[show](nodes)
    },

    onNodeClick ({ node, nodes }) {
      console.log(node, nodes)
      this.node = node
      this.open.inspector = true
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
