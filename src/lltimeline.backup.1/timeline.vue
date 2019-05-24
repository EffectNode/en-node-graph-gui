<template>
  <div>
    <TimelineHolder v-if="water" :editor="water.timeinfo" :timeline="water.timeline"></TimelineHolder>
  </div>
</template>

<script>
export default {
  props: {
    water: {}
  },
  components: {
    TimelineHolder: require('./timeline-holder.vue').default
  },
  data () {
    return {
      // timeline: {
      //   totalTime: 30,
      //   tracks: [
      //     {
      //       _id: '_62003052518',
      //       start: 0,
      //       end: 20.071031128319383,
      //       title: 'fly',
      //       trashed: false
      //     }
      //   ]
      // },
      // timeinfo: {
      //   $emit: (evt, args) => {
      //     console.log(evt)
      //     let sync = false
      //     if (evt === 'update-timleine') {
      //       sync = true
      //     } else if (evt === 'play') {
      //       sync = true
      //     } else if (evt === 'start') {
      //       sync = true
      //     } else if (evt === 'stop') {
      //       sync = true
      //     } else if (evt === 'restart') {
      //       sync = true
      //     } else if (evt === 'hovering') {
      //       sync = true
      //     }
      //     if (sync) {
      //       this.$emit('sync-timeline', { timeline: this.timeline, timeinfo: this.timeinfo })
      //     }
      //   },
      //   $forceUpdate () {},
      //   getTime (start) {
      //     let now = window.performance.now() * 0.001
      //     return now - start
      //   },
      //   start: 0,
      //   totalTime: 30,
      //   timelinePlaying: true,
      //   timelineControl: 'timer',
      //   timelinePercentageLast: 0,
      //   timelinePercentage: 0 // can be timeline, render or play
      // }
    }
  },
  mounted () {
    // this.$on('sync-timeline', (args) => {
    //   window.dispatchEvent(new CustomEvent('sync-timeline', { detail: args }))
    // })
    // let loop = () => {
    //   window.requestAnimationFrame(loop)
    //   if (this.timeinfo && this.timeline && this.timeinfo.timelineControl === 'timer' && this.timeinfo.timelinePlaying) {
    //     let totalTime = this.timeline.totalTime
    //     this.timeinfo.timelinePercentageLast = this.timeinfo.getTime(this.timeinfo.start) / totalTime
    //     let lastTime = this.timeinfo.timelinePercentageLast * totalTime
    //     this.timeinfo.timelinePercentage = lastTime / totalTime
    //     this.timeinfo.timelinePercentage %= 1
    //     // this.$emit('sync-timeline', { timeline: this.timeline, timeinfo: this.timeinfo })
    //   }
    // }
    // window.requestAnimationFrame(loop)
  }
}
</script>

<style>

</style>
