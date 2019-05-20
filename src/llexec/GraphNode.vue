<template>
  <Component v-if="compo && node" @exec="onExec" :parentNode="parentNode" ref="me" :parentComponent="nodeMap[node.to]" :isRootNode="!!!node.to" :components="nodeMap" :nodes="nodes" :node="node" @ready="onReady" @remove="onRemove" :is="compo"></Component>
</template>

<script>
import * as VC from './vue-compile'
export default {
  props: {
    node: {},
    nodes: {},
    nodeMap: {},
    execStack: {
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      parentNode: this.nodes.find(n => n._id === this.node.to),
      compo: false,
      self: {},
      rAFID: 0,
      execFnc () {
      }
    }
  },
  beforeDestroy () {
    this.execStack[this.node._id] = false
    // window.cancelAnimationFrame(this.rAFID)
  },
  created () {
    // let rAF = () => {
    //   this.rAFID = window.requestAnimationFrame(rAF)
    //   this.execFnc()
    // }
    // this.rAFID = window.requestAnimationFrame(rAF)
  },
  methods: {
    onExec (v) {
      this.execStack[this.node._id] = v
    },
    onReady (compos) {
      let tt = setInterval(() => {
        let me = this.nodeMap[this.node._id] = compos
        let parent = this.nodeMap[this.node.to]
        if (parent) {
          clearInterval(tt)
          me.$emit('addToParent', {
            parent,
            me
          })
          parent.$emit('addChild', {
            child: me,
            me: parent
          })
        }
      }, 1)
    },
    onRemove () {
      let me = this.$refs['me']
      let parent = this.nodeMap[this.node.to]
      if (this.nodeMap[this.node._id]) {
        this.nodeMap[this.node._id].$emit('removeFromParent', {
          me: me,
          parent: parent
        })
      }
      if (this.node.to) {
        this.nodeMap[this.node.to].$emit('removeChild', {
          me: parent,
          child: me
        })
      }
    },
    async getCompos ({ node }) {
      let temp = `
        <template>
          <div class="omg-this-compo" nodeid="${node._id}"></div>
        </template>
        <script>
        export default {
        };
        ${'<'}/script>
        <style>
        </style>
      `
      window.requestIdleCallback(async () => {
        this.compo = await VC.makeCompo({ src: node.src || temp, library: node.library || [] })
        this.$forceUpdate()
      })
    },
    init () {

    }
  },
  mounted () {
    this.getCompos({ node: this.node })
  }
}
</script>

<style>

</style>
