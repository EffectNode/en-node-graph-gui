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
    window.addEventListener('mousemove', (evt) => {
      if (md) {
        let now = evt.pageX
        let deltaX = now - state.sx
        state.dx = deltaX

        let width = this.$parent.rect.width

        width /= this.$parent.baseTime / this.$parent.initBaseTime
        // console.log(deltaX)

        this.$parent.track.start += Number(deltaX / width * this.$parent.$parent.baseTime)
        this.$parent.track.end += Number(deltaX / width * this.$parent.$parent.baseTime)

        if (this.$parent.track.start < 0) {
          this.$parent.track.start -= Number(deltaX / width * this.$parent.$parent.baseTime)
          this.$parent.track.end -= Number(deltaX / width * this.$parent.$parent.baseTime)
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
  }
}
</script>

<style scoped>
.spread{
  cursor: move;
  display: inline-block;
  width: calc(100% - 50px * 2);
  height: 50px;
  background-color: #e9e9e99d;
}
.dragger{
  height: calc(100% / 2);
  user-select: none;
}
</style>
