<template>
  <div class="home" v-if="water">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
    </div> -->

    <NodeTree v-if="nodes" :show="show" @dropped="onReload({ timeout: 600 })" @view="(v) => { view = v }" @onNodeClick="onNodeClick" :nodes="dynamic(show, nodes)" class="full svg-box" ref="editor">
    </NodeTree>

    <UIBtnTools v-if="nodes" :show="show" @show="show = $event" :nodes="nodes" @onChangeView="$emit('onChangeView', $event)" :node="node" ></UIBtnTools>
    <UIPreviewBox v-if="water && nodes.length > 0" @run="onReload({ timeout: 0 })">
      <EXEC ref="exec" mode="preview" :water="water"></EXEC>
    </UIPreviewBox>

    <UITimeline v-if="open.timeline && water" @close="open.timeline = false; $forceUpdate()">
      <UITimelineHolder :timeline="water.timeline" :doSync="doSync" :editor="water.timeinfo" :timeinfo="water.timeinfo"></UITimelineHolder>
    </UITimeline>

    <UIInspector v-if="open.inspector && timeline" @close="onClose">
      <UIControls :timeline="water.timeline" @reload="onReload({ timeout: 0 })" @openCoder="openCoder" :nodes="nodes" @onLayout="$emit('onLayout', $event)" @close="onClose" :node="node" @nodes="nodes = $event" @show="show = $event"></UIControls>
    </UIInspector>

    <UICoder v-if="open.coder" @close="open.coder = false; $forceUpdate()">
      <UICodeControl @reload="onReload({ timeout: 0 })" :nodes="nodes" @onLayout="$emit('onLayout', $event)" @close="onCloseCoder" :node="node" @nodes="nodes = $event" @show="show = $event"></UICodeControl>
    </UICoder>

  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    EXEC: require('../llexec/EXEC.vue').default,

    NodeTree: require('../llsvg/NodeTree.vue').default,
    UIPreviewBox: require('../llui/UIPreviewBox.vue').default,
    UICodeControl: require('../llui/UICodeControl.vue').default,
    UIControls: require('../llui/UIControls.vue').default,
    UIInspector: require('../llui/UIInspector.vue').default,
    UITimeline: require('../llui/UITimeline.vue').default,
    UITimelineHolder: require('../lltimeline/timeline-holder.vue').default,
    UICoder: require('../llui/UICoder.vue').default,
    UIBtnTools: require('../llui/UIBtnTools.vue').default
  },
  data () {
    return {
      show: 'normal',
      open: {
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
  },
  mounted () {
    // let loop = () => {
    //   window.requestAnimationFrame(loop)
    //   if (this.timeinfo && this.timeline && this.timeinfo.timelineControl === 'timer' && this.timeinfo.timelinePlaying) {
    //     let totalTime = this.timeline.totalTime
    //     this.timeinfo.timelinePercentageLast = this.getTime(this.timeinfo.start) / totalTime
    //     let lastTime = this.timeinfo.timelinePercentageLast * totalTime
    //     this.timeinfo.timelinePercentage = lastTime / totalTime
    //     this.timeinfo.timelinePercentage %= 1

    //     this.doSync()
    //   }
    // }
    // window.requestAnimationFrame(loop)

    window.getNODES = () => {
      return this.nodes
    }
    window.getWater = () => {
      let newwater = JSON.parse(JSON.stringify(this.water))
      newwater.timeinfo.start = 0
      newwater.timeinfo.timelinePlaying = true
      newwater.timeinfo.timelineControl = 'timer'
      newwater.timeinfo.timelinePercentageLast = 0
      newwater.timeinfo.timelinePercentage = 0

      return newwater
    }

    console.log(`copy(window.getNODES())`)
    console.log(`copy(encodeURIComponent(JSON.stringify(getNODES())))`)
    console.log(`copy(window.getWater())`)
    console.log(`copy(encodeURIComponent(JSON.stringify(getWater())))`)

    setTimeout(() => {
      this.water = require('../llui/water/water-02.json')
      // always reset timelinfo
      this.water.timeinfo = {
        start: window.performance.now() * 0.001,
        totalTime: 30,
        timelinePlaying: true,
        timelineControl: 'timer',
        timelinePercentageLast: 0,
        timelinePercentage: 0 // can be timeline, render or play
      }

      this.clearTimer = setInterval(() => {
        if (this.water.timeinfo.timelineControl === 'timer' && this.water.timeinfo.timelinePlaying) {
          let totalTime = this.water.timeline.totalTime
          this.water.timeinfo.timelinePercentageLast = this.getTime(this.water.timeinfo.start) / totalTime
          let lastTime = this.water.timeinfo.timelinePercentageLast * totalTime
          this.water.timeinfo.timelinePercentage = lastTime / totalTime
          this.water.timeinfo.timelinePercentage %= 1
          this.doSync()
        }
      }, 1000 / 60)

      this.doSync()

      // this.waterTimer = setInterval(() => {
      //   // this.makeTimeVars()
      // })
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
          instant: true,
          goHome: false,
          resetZoom: false,
          ...args
        }
      })
    })
  },
  beforeDestroy () {
    clearInterval(this.clearTimer)
  },
  methods: {
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
