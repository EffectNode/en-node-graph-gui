<template>
  <Component v-if="compo && node" :timetracks="timetracks" :timename="timename" @exec="onExec" :parentNode="parentNode" ref="me" :parentComponent="compoMap[node.to]" :isRootNode="!!!node.to" :components="compoMap" :nodes="nodes" :node="node" @ready="onReady" @remove="onRemove" :is="compo"></Component>
</template>

<script>
import * as VC from './vue-compile'

export default {
  props: {
    timename: {},
    timetracks: {},
    node: {},
    nodes: {},
    compoMap: {},
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
    let tt = setInterval(() => {
      let me = this.compoMap[this.node._id]
      let parent = this.compoMap[this.node.to]
      if (parent && me) {
        clearInterval(tt)
        parent.$emit('addChild', {
          child: me,
          me: parent
        })
        this.tryTestComplete()
      }
    }, 0)

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
    tryTestComplete () {
      if (Object.keys(this.compoMap).length === this.nodes.length) {
        this.$emit('all-done')
      }
    },
    onReady (compos) {
      this.compoMap[this.node._id] = compos
    },
    onRemove () {
      let me = this.$refs['me']
      let parent = this.compoMap[this.node.to]
      // if (this.compoMap[this.node._id]) {
      //   this.compoMap[this.node._id].$emit('removeFromParent', {
      //     me: me,
      //     parent: parent
      //   })
      // }
      if (this.node.to) {
        this.compoMap[this.node.to].$emit('removeChild', {
          child: me,
          me: parent
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
      // window.requestIdleCallback(async () => {
      this.compo = await VC.makeCompo({ src: node.src || temp, library: node.library || [] })
        // this.$forceUpdate()
      // })
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
