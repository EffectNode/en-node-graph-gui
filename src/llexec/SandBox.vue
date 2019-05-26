<template>
  <div class="app-entry-dom" v-if="activeNodes && water">
    <GraphNode @all-done="onAllDone" :time="water.timeinfo.timelinePercentage * water.timeinfo.totalTime" :progress="water.timeinfo.timelinePercentage" :timename="timename" :timetracks="timetracks" :execStack="execStack" :compoMap="compoMap" :nodes="activeNodes" :node="node" :key="node._id" v-for="node in activeNodes"></GraphNode>
  </div>
</template>

<script>
import GraphNode from './GraphNode.vue'
import * as Node from '../llsvg/node.js'
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
      // links: [],
      timetracks: [],
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
    let top = window.top
    if (top) {
      window.addEventListener('keydown', (evt) => {
        if (evt.keyCode === 27) {
          top.postMessage({ type: 'escape' }, window.location.origin)
        }
      })
    }

    // if (this.water) {
    //   this.links = Node.getLinks({ nodes: this.water.nodes })
    // }

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
          cancelAnimationFrame(this.clearTimer)
        }
      }
    })
    let rAF2 = () => {
      this.clearTimer = requestAnimationFrame(rAF2)
      if (this.water.timeinfo.timelineControl === 'timer' && this.water.timeinfo.timelinePlaying) {
        let totalTime = this.water.timeline.totalTime
        this.water.timeinfo.timelinePercentageLast = this.getTime(this.water.timeinfo.start) / totalTime
        let lastTime = this.water.timeinfo.timelinePercentageLast * totalTime
        this.water.timeinfo.timelinePercentage = lastTime / totalTime
        this.water.timeinfo.timelinePercentage %= 1
      }
    }
    this.clearTimer = requestAnimationFrame(rAF2)

    // this.water.timeinfo = {
    //   start: 0,
    //   totalTime: this.water.timeinfo,
    //   timelinePlaying: true,
    //   timelineControl: 'timer',
    //   timelinePercentageLast: 0,
    //   timelinePercentage: 0 // can be timeline, render or play
    // }

    let rAF = () => {
      this.rAFID = window.requestAnimationFrame(rAF)

      // time name and time track args
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
    onAllDone () {
      let top = window.top
      if (top) {
        top.postMessage({ type: 'all-ready', data: this.water }, window.location.origin)
      }
    },
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

        info.map[track.title] = wrap.progress
        info.array.push(wrap)

        return info
      }, { map: {}, array: [] })

      this.timename = timelineKeynames.map
      this.timetracks = timelineKeynames.array

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
