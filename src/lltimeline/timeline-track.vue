<template>
  <div class="track" :style="styler">
    <slot name="start" ref="start"></slot>
    <slot name="spread"></slot>
    <slot name="end" ref="end"></slot>
  </div>
</template>

<script>
export default {
  props: {
    track: {}
  },
  data () {
    return {
      rect: false,
      styler: {
        display: 'none',
        marginLeft: `${0}px`,
        width: `${100}%`
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    init () {
      this.rect = this.$parent.toucherRect
      setInterval(() => {
        this.syncCSS()
      }, 100)
    },
    syncCSS () {
      let duration = Number(this.track.end) - Number(this.track.start)
      let totalTime = this.$parent.totalTime
      this.styler = {}
      let width = this.$parent.toucherRect.width - 25
      // let width = 1440
      this.styler.width = `${(width) * duration / totalTime}px`
      this.styler.marginLeft = `${(width) * Number(this.track.start) / totalTime}px`
      // console.log(this.track)
      this.$forceUpdate()
    }
  }
}
</script>

<style scoped>
.track{
  display: flex;
  justify-content: space-between;
  height: 25px;
  background-color: rgba(0,0,0,0.1);
  border-radius: 25px;
  overflow: hidden;
}
.sticky{
  position: sticky;
  left: 0px;
  background-color: #eee;
}
</style>
