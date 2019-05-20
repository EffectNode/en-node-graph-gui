<template>
  <div>
    <TimelineHolder :editor="editor" :timeline="timeline"></TimelineHolder>
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
      editor: {
        $emit () {},
        $forceUpdate () {},
        getTime (start) {
          let now = window.performance.now() * 0.001
          return now - start
        },
        isAdmin: false,
        start: 0,
        totalTime: 1,
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
      if (this.editor.timelineControl === 'timer' && this.editor.timelinePlaying) {
        let totalTime = this.timeline.totalTime
        this.editor.timelinePercentageLast = this.editor.getTime(this.editor.start) / totalTime
        let lastTime = this.editor.timelinePercentageLast * totalTime
        this.editor.timelinePercentage = lastTime / totalTime
        this.editor.timelinePercentage %= 1
      }
    }, 1000 / 60)
  }
}
</script>

<style>

</style>
