<template>
  <div class="app-entry-dom" v-if="activeNodes && water">
    <GraphNode :timeinfo="timeinfo" :timeline="timeline" :execStack="execStack" :compoMap="compoMap" :nodes="activeNodes" :node="node" :key="node._id" v-for="node in activeNodes"></GraphNode>
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
      timeline: {
        totalTime: 30,
        tracks: [
          {
            _id: '_62003052518',
            start: 0,
            end: 20.071031128319383,
            title: 'fly',
            trashed: false
          }
        ]
      },
      getTime: (start) => {
        let now = window.performance.now() * 0.001
        return now - start
      },
      timeinfo: {
        start: 0,
        totalTime: 30,
        timelinePlaying: true,
        timelineControl: 'timer',
        timelinePercentageLast: 0,
        timelinePercentage: 0 // can be timeline, render or play
      },
      execStack: {},
      compoMap: {}
    }
  },
  mounted () {
    let loop = () => {
      window.requestAnimationFrame(loop)
      if (this.timeinfo.timelineControl === 'timer' && this.timeinfo.timelinePlaying) {
        let totalTime = this.timeline.totalTime
        this.timeinfo.timelinePercentageLast = this.getTime(this.timeinfo.start) / totalTime
        let lastTime = this.timeinfo.timelinePercentageLast * totalTime
        this.timeinfo.timelinePercentage = lastTime / totalTime
        this.timeinfo.timelinePercentage %= 1
      }
    }
    window.requestAnimationFrame(loop)

    window.addEventListener('message', (evt) => {
      if (window.top && window.top.location.origin === window.location.origin) {
        let msg = evt.data
        let type = msg.type
        let args = msg.data

        if (type === 'sync-all') {
          console.log(JSON.stringify(args.timeinfo))
          // this.nodes = args
          this.timeline = args.timeline
          this.timeinfo = args.timeinfo
        }
      }
    })

    let rAF = () => {
      this.rAFID = window.requestAnimationFrame(rAF)
      for (var key in this.execStack) {
        let fn = this.execStack[key]
        if (fn) {
          fn()
        }
      }
    }
    this.rAFID = window.requestAnimationFrame(rAF)
  },
  beforeDestroy () {
    cancelAnimationFrame(this.rAFID)
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
