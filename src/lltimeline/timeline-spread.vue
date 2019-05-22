<template>
  <div class="spread" :style="styler">
    <slot name="editor"></slot>
    <div ref="dragger" class="dragger">
      <slot name="dragger"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    editor: {},
    mode: {}
  },
  data () {
    return {
      styler: {
        width: `calc(100% - ${this.$parent.sizer}px * 2)`,
        height: `${this.$parent.sizer}px`
      }
    }
  },
  mounted () {
    let dom = this.$refs['dragger']
    let md = false
    let state = {
      sx: 0,
      dx: 0,
      ax: 0
    }
    dom.addEventListener('mousedown', (evt) => {
      md = true
      state.sx = evt.pageX
    })
    dom.addEventListener('touchstart', (evt) => {
      md = true
      if (evt.touches[0]) {
        state.sx = evt.touches[0].pageX
      }
    })
    window.addEventListener('mousemove', (evt) => {
      if (md) {
        let now = evt.pageX
        let deltaX = now - state.sx
        state.dx = deltaX

        // console.log(deltaX)
        let ww = this.$parent.rect.width
        // ww = 1440

        this.$parent.track.start += Number(deltaX / ww * this.$parent.$parent.totalTime)
        this.$parent.track.end += Number(deltaX / ww * this.$parent.$parent.totalTime)

        if (this.$parent.track.start < 0) {
          this.$parent.track.start -= Number(deltaX / ww * this.$parent.$parent.totalTime)
          this.$parent.track.end -= Number(deltaX / ww * this.$parent.$parent.totalTime)
        }

        this.$parent.syncCSS()
        this.$parent.$forceUpdate()
        this.$forceUpdate()
        state.ax += deltaX
        state.sx = now
      }
    })
    dom.addEventListener('touchmove', (evt) => {
      if (md && evt.touches[0]) {
        let now = evt.touches[0].pageX
        let deltaX = now - state.sx
        state.dx = deltaX

        // console.log(deltaX)
        let ww = this.$parent.rect.width
        // ww = 1440
        this.$parent.track.start += Number(deltaX / ww * this.$parent.$parent.totalTime)
        this.$parent.track.end += Number(deltaX / ww * this.$parent.$parent.totalTime)

        if (this.$parent.track.start < 0) {
          this.$parent.track.start -= Number(deltaX / ww * this.$parent.$parent.totalTime)
          this.$parent.track.end -= Number(deltaX / ww * this.$parent.$parent.totalTime)
        }

        this.$parent.syncCSS()
        this.$parent.$forceUpdate()
        this.$forceUpdate()
        state.ax += deltaX
        state.sx = now
      }
    })
    window.addEventListener('mouseup', (evt) => {
      md = false
    })
    window.addEventListener('touchend', (evt) => {
      md = false
    })
  }
}
</script>

<style scoped>
.spread{
  cursor: move;
  display: inline-block;
  width: calc(100% - 25px * 2);
  height: 25px;
  background-color: #e9e9e99d;
  -webkit-tap-highlight-color: transparent;
}
.dragger{
  height: calc(100% / 2);
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
</style>
