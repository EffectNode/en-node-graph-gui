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

      let baseTime = this.$parent.BASE_TIME
      let width = this.$parent.BASE_WIDTH

      // let baseTime = 30
      // let width = 1024 - 25

      this.styler = {}
      // let width = 1440
      this.styler.width = `${(width) * duration / baseTime}px`
      this.styler.marginLeft = `${(width) * Number(this.track.start) / baseTime}px`
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
