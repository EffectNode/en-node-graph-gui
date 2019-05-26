<template>
  <div class="home">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
    </div> -->
    <div class="nodetree">
      <NodeTree @open="open" v-if="nodes && !open.fullpreview" :show="show" @dropped="onReload({ timeout: 600 })" @view="(v) => { view = v }" @onNodeClick="onNodeClick" :nodes="dynamic(show, nodes)" class="full svg-box" ref="editor">
      </NodeTree>
    </div>

    <UIBtnTools v-if="nodes" :open="open" :show="show" @show="show = $event" :nodes="nodes" @onChangeView="$emit('onChangeView', $event)" :node="node" ></UIBtnTools>
    <UIPreviewBox @addOnClose="(v) => { onCloseList.push(v) }" :order="order" :style="{ zIndex: order.indexOf('preview') + 20 }" :open="open" v-if="water && nodes.length > 0" @run="onReload({ timeout: 0 })">
      <EXEC ref="exec" mode="preview" :water="water"></EXEC>
    </UIPreviewBox>

    <UITimeline :order="order" :style="{ zIndex: order.indexOf('timeline') + 20 }" :open="open" v-if="water && !open.fullpreview" @close="open.timeline = false; $forceUpdate()">
      <UITimelineHolder :timeline="water.timeline" :doSync="doSync" :editor="water.timeinfo" :timeinfo="water.timeinfo"></UITimelineHolder>
    </UITimeline>

    <UIInspector :order="order" :style="{ zIndex: order.indexOf('inspector') + 20 }" :open="open" @close="onClose">
      <UIControls v-if="open.inspector && timeline" :timeline="water.timeline" @reload="onReload({ timeout: 0 })" @openCoder="openCoder" :nodes="nodes" @onLayout="$emit('onLayout', $event)" @close="onClose" :node="node" @nodes="nodes = $event" @show="show = $event"></UIControls>
    </UIInspector>

    <UICoder @addOnClose="(v) => { onCloseList.push(v) }" :order="order" :style="{ zIndex: order.indexOf('coder') + 20 }" :open="open" v-if="open.coder" @close="open.coder = false; $forceUpdate()">
      <UICodeControl @reload="onReload({ timeout: 0 })" :nodes="nodes" @onLayout="$emit('onLayout', $event)" @close="onCloseCoder" :node="node" @nodes="nodes = $event" @show="show = $event"></UICodeControl>
    </UICoder>

    <UIMediaBox @addOnClose="(v) => { onCloseList.push(v) }" :order="order" :style="{ zIndex: order.indexOf('mediabox') + 20 }" :open="open" v-if="open.mediabox" @close="open.mediabox = false; $forceUpdate()">

    </UIMediaBox>

  </div>
</template>

<script>
export default {
  props: {
    initWater: {}
  },
  name: 'home',
  components: {
    // EXEC
    EXEC: () => import(/* webpackChunkName: "engine" */'../llexec/EXEC.vue'),
    NodeTree: () => import(/* webpackChunkName: "engine" */'../llsvg/NodeTree.vue'),
    UICodeControl: () => import(/* webpackChunkName: "engine" */'../llui/UICodeControl.vue'),
    UIControls: () => import(/* webpackChunkName: "engine" */'../llui/UIControls.vue'),
    UITimelineHolder: () => import(/* webpackChunkName: "engine" */'../lltimeline/timeline-holder.vue'),
    UICoder: () => import(/* webpackChunkName: "engine" */'../llui/UICoder.vue'),

    // UIBOX
    UIPreviewBox: () => import(/* webpackChunkName: "engine" */'../llui/UIPreviewBox.vue'),
    UIMediaBox: () => import(/* webpackChunkName: "engine" */'../llui/UIMediaBox.vue'),
    UIInspector: () => import(/* webpackChunkName: "engine" */'../llui/UIInspector.vue'),
    UITimeline: () => import(/* webpackChunkName: "engine" */'../llui/UITimeline.vue'),
    UIBtnTools: () => import(/* webpackChunkName: "engine" */'../llui/UIBtnTools.vue')
  },
  data () {
    return {
      onCloseList: [],
      clearTimer: 0,
      order: [
        'coder',
        'timeline',
        'inspector',
        'preview'
      ],
      show: 'normal',
      open: {
        mediabox: false,
        fullpreview: false,
        coder: false,
        timeline: true,
        inspector: false
      },

      getTime (start) {
        let now = window.performance.now() * 0.001
        return now - start
      },
      water: false,

      // defaultWater: () => ({
      //   nodes: [],
      //   timeline: {
      //     totalTime: 30,
      //     tracks: [
      //       {
      //         _id: '_62003052518',
      //         start: 0,
      //         end: 20.071031128319383,
      //         title: 'fly',
      //         trashed: false
      //       }
      //     ]
      //   },

      //   timeinfo: {
      //     // $forceUpdate () {},
      //     start: 0,
      //     totalTime: 30,
      //     timelinePlaying: true,
      //     timelineControl: 'timer',
      //     timelinePercentageLast: 0,
      //     timelinePercentage: 0 // can be timeline, render or play
      //   }
      // }),

      view: {
        x: 0,
        y: 0
      },
      node: false

      // nodes: false
    }
  },
  computed: {
    nodes: {
      get () {
        if (!this.water) {
          return
        }
        return this.water.nodes
      },
      set (v) {
        this.water.nodes = v
      }
    },
    timeline: {
      get () {
        if (!this.water) {
          return
        }
        return this.water.timeline
      },
      set (v) {
        this.water.timeline = v
      }
    },
    timeinfo: {
      get () {
        if (!this.water) {
          return
        }
        return this.water.timeinfo
      },
      set (v) {
        this.water.timeinfo = v
      }
    }
  },
  watch: {
    // order () {
    //   window.dispatchEvent(new Event('resize'))
    //   setTimeout(() => {
    //     window.dispatchEvent(new Event('resize'))
    //     setTimeout(() => {
    //       window.dispatchEvent(new Event('resize'))
    //     })
    //   })
    // }
  },
  mounted () {
    window.addEventListener('keydown', (evt) => {
      if (evt.keyCode + '' === '27') {
        let latestOnClose = this.onCloseList.pop()
        if (latestOnClose) {
          latestOnClose()
        }
      }
    })
    window.addEventListener('message', (evt) => {
      if (evt.origin === window.location.origin) {
        let signal = evt.data
        let type = signal.type
        if (type === 'escape') {
          let latestOnClose = this.onCloseList.pop()
          if (latestOnClose) {
            latestOnClose()
          }
        }
      }
    })

    window.getNODES = () => {
      return this.nodes
    }
    window.getWater = () => {
      return this.getWater()
    }
    window.zip = ({ obj }) => {
      return this.zip({ obj })
    }
    window.unzip = ({ gzip }) => {
      return this.unzip({ gzip })
    }

    console.log(`copy(window.getNODES())`)
    console.log(`copy(encodeURIComponent(JSON.stringify(getNODES())))`)
    console.log(`copy(window.getWater())`)
    console.log(`copy(encodeURIComponent(JSON.stringify(getWater())))`)
    console.log(`copy(await window.zip({ obj: getWater() }))`)
    console.log(`copy(await window.unzip({ gzip: 'gzipstring' }))`)

    this.water = JSON.parse(JSON.stringify(this.initWater))
    // always reset timelinfo
    this.water.timeinfo = {
      ...this.water.timeinfo,
      start: window.performance.now() * 0.001,
      // totalTime: 30,
      loop: true,
      elapsed: 0,
      timelinePlaying: false,
      timelineControl: 'timer',
      timelinePercentageLast: 0,
      timelinePercentage: 0 // can be timeline, render or play
    }

    window.addEventListener('message', (evt) => {
      let obj = evt.data
      let type = obj.type
      if (type === 'all-ready') {
        console.log('all-ready')
        setTimeout(() => {
          this.water.timeinfo.start = window.performance.now() * 0.001
          this.water.timeinfo.timelinePlaying = true
        }, 10)
      }
    }, false)

    let rAF2 = () => {
      this.clearTimer = requestAnimationFrame(rAF2)
      if (this.water.timeinfo.timelineControl === 'timer' && this.water.timeinfo.timelinePlaying) {
        let totalTime = this.water.timeline.totalTime
        this.water.timeinfo.timelinePercentageLast = this.getTime(this.water.timeinfo.start) / totalTime
        let lastTime = this.water.timeinfo.timelinePercentageLast * totalTime
        this.water.timeinfo.timelinePercentage = lastTime / totalTime
        if (this.water.timeinfo.loop) {
          this.water.timeinfo.elapsed = this.getTime(this.water.timeinfo.start) % this.water.timeinfo.totalTime
          this.water.timeinfo.timelinePercentage %= 1
        } else {
          this.water.timeinfo.elapsed = this.getTime(this.water.timeinfo.start)
        }
        this.doSync()
      }
    }

    this.clearTimer = requestAnimationFrame(rAF2)
    this.doSync()
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
          instant: true,
          goHome: false,
          resetZoom: false,
          ...args
        }
      })
    })
  },
  beforeDestroy () {
    clearInterval(this.autoSaveTimer)
    cancelAnimationFrame(this.clearTimer)
  },
  methods: {
    getWater () {
      let newwater = JSON.parse(JSON.stringify(this.water))
      newwater.timeinfo.start = 0
      newwater.timeinfo.timelinePlaying = true
      newwater.timeinfo.timelineControl = 'timer'
      newwater.timeinfo.timelinePercentageLast = 0
      newwater.timeinfo.timelinePercentage = 0
      newwater.timeinfo.elapsed = 0

      return newwater
    },
    async zip ({ obj }) {
      let pako = await import('pako')
      var binaryString = pako.deflate(JSON.stringify(obj), { to: 'string' })
      var base64 = btoa(binaryString)
      return base64
    },
    async unzip ({ gzip }) {
      let pako = await import('pako')
      gzip = atob(gzip)
      var restored = JSON.parse(pako.inflate(gzip, { to: 'string' }))
      return restored
    },
    sendTop (v) {
      this.order.splice(this.order.indexOf(v), 1)
      this.order.push(v)
    },
    doSync () {
      window.dispatchEvent(new CustomEvent('sync-all', {
        detail: {
          timeinfo: this.water.timeinfo,
          timeline: this.water.timeline
        }
      }))
    },
    openCoder () {
      this.open.coder = true
      this.$forceUpdate()
    },
    onReload ({ timeout } = {}) {
      setTimeout(() => {
        this.$refs.exec.$emit('reload')
      }, timeout || 0)
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
      // console.log(node, nodes)
      this.node = node
      this.open.inspector = true
      this.sendTop('coder')
      this.sendTop('inspector')
    }
  }
}
</script>

<style lang="css" scoped>
.home{
  background-color: #212121;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.nodetree{
  width: 100%;
  height: 60%;
}
@media screen and (min-width: 767px) {
  .nodetree{
    width: calc(100% - 320px);
    height: calc(100% - 250px);
  }
}
</style>
