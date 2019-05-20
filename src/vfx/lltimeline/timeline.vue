<template>
  <div>
    <TimelineHolder :editor="encap" :timeline="timeline"></TimelineHolder>
  </div>
</template>

<script>
export default {
  components: {
    TimelineHolder: require('./timeline-holder.vue').default
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
      encap: {
        $emit: (evt, args) => {
          if (evt === 'update-canvas') {
            console.log(evt, args)
            this.$emit(evt, { timeline: this.timeline })
          }
        },
        $forceUpdate () {},
        getTime (start) {
          let now = window.performance.now() * 0.001
          return now - start
        },
        isAdmin: false,
        start: 0,
        totalTime: 30,
        timelinePlaying: true,
        timelineControl: 'timer',
        timelinePercentageLast: 0,
        timelinePercentage: 0, // can be timeline, render or play
        items: [],
        canvas: false,
        me: false,
        doneFirstLoad: false
      }
    }
  },
  mounted () {
    setInterval(() => {
      if (this.encap.timelineControl === 'timer' && this.encap.timelinePlaying) {
        let totalTime = this.timeline.totalTime
        this.encap.timelinePercentageLast = this.encap.getTime(this.encap.start) / totalTime
        let lastTime = this.encap.timelinePercentageLast * totalTime
        this.encap.timelinePercentage = lastTime / totalTime
        this.encap.timelinePercentage %= 1
      }
    }, 1000 / 60)
  }
}
</script>

<style>

</style>
