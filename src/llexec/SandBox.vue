<template>
  <div class="app-entry-dom" v-if="activeNodes && water">
    <GraphNode :timename="timename" :execStack="execStack" :compoMap="compoMap" :nodes="activeNodes" :node="node" :key="node._id" v-for="node in activeNodes"></GraphNode>
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
      timename: {},
      getTime: (start) => {
        let now = new Date().getTime() * 0.001
        return now - start
      },
      execStack: {},
      compoMap: {}
    }
  },
  mounted () {
    window.addEventListener('message', (evt) => {
      if (window.top && window.top.location.origin === window.location.origin) {
        let msg = evt.data
        let type = msg.type
        let args = msg.data

        if (type === 'sync-all') {
          // console.log(JSON.stringify(args.timeinfo))
          // this.nodes = args
          // this.water.timeline = args.timeline
          this.water.timeline = args.timeline
          this.water.timeinfo = args.timeinfo

          // for (var kn in args.timeinfo) {
          //   this.water.timeinfo[kn] = args.timeinfo[kn]
          // }

          // this.$forceUpdate()
        }
      }
    })

    // this.water.timeinfo = {
    //   start: 0,
    //   totalTime: this.water.timeinfo,
    //   timelinePlaying: true,
    //   timelineControl: 'timer',
    //   timelinePercentageLast: 0,
    //   timelinePercentage: 0 // can be timeline, render or play
    // }

    // this.timeputID = setTimeout(() => {
    //   let start = new Date().getTime()
    //   this.intervalID = setInterval(() => {
    //     if (this.water.timeline) {
    //       this.timelinePercentage = ((new Date().getTime() - start) * 0.001) / this.water.timeline.totalTime % 1
    //     }
    //   }, 1000 / 120)
    // }, 100)

    let rAF = () => {
      this.rAFID = window.requestAnimationFrame(rAF)

      // if (this.water.timeinfo.timelineControl === 'timer' && this.water.timeinfo.timelinePlaying) {
      //   let totalTime = this.water.timeline.totalTime
      //   this.water.timeinfo.timelinePercentageLast = this.getTime(this.water.timeinfo.start) / totalTime
      //   let lastTime = this.water.timeinfo.timelinePercentageLast * totalTime
      //   this.water.timeinfo.timelinePercentage = lastTime / totalTime
      //   this.water.timeinfo.timelinePercentage %= 1
      // }

      // let start = canvasInit()
      // this.intervalID = setInterval(() => {
      //   if (this.canvas.doc.timeline) {
      //     this.timelinePercentage = ((canvasInit() - start) * 0.001) / this.canvas.doc.timeline.totalTime % 1
      //   }
      // }, 1000 / 120)

      this.makeTimeVars()

      // exec stack
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
    makeTimeVars () {
      // let currentSecond = ((new Date()).getTime() * 0.001 - this.water.timeinfo.start) % this.water.timeline.totalTime

      let totalTime = this.water.timeline.totalTime
      let timelinePercentage = this.water.timeinfo.timelinePercentage
      let currentSecond = totalTime * timelinePercentage

      let timelineKeynames = this.water.timeline.tracks.reduce((info, track) => {
        let start = track.start
        let end = track.end
        let duration = end - start
        let wrap = {
          ...track,
          now: currentSecond / totalTime,
          progress: (currentSecond - start) / duration
        }
        if (currentSecond < start) {
          wrap.progress = 0.000001
        }
        if (currentSecond > end) {
          wrap.progress = 1
        }

        info[track.title] = wrap.progress

        return info
      }, {})

      this.timename = timelineKeynames

      // console.log(JSON.stringify(timelineKeynames))
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

  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>

<style scoped>

</style>
