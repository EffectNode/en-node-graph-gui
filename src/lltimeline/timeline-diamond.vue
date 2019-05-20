<template>
  <div class="diamond" :style="styler">
    <slot class="nosel"></slot>
  </div>
</template>

<script>
export default {
  props: {
    mode: {},
    editor: {}
  },
  data () {
    return {
      styler: {
        width: `${this.$parent.$parent.sizer}px`,
        height: `${this.$parent.$parent.sizer}px`
      }
    }
  },
  mounted () {
    let dom = this.$el
    let md = false
    let state = {
      start: 0,
      delta: 0
    }
    dom.addEventListener('mousedown', (evt) => {
      md = true
      state.start = this.editor.timelinePercentage * this.editor.totalTime
    })
    window.addEventListener('mousemove', (evt) => {
      if (md) {
        state.now = this.editor.timelinePercentage * this.editor.totalTime

        if (this.mode === 'start') {
          this.$parent.track.start += state.now - state.start
        } else if (this.mode === 'end') {
          this.$parent.track.end += state.now - state.start
        }

        if (this.$parent.track.start < 0) {
          this.$parent.track.start -= state.now - state.start
        }

        state.start = state.now

        this.$parent.syncCSS()
        this.$parent.$forceUpdate()
        this.$forceUpdate()
      }
    })
    window.addEventListener('mouseup', (evt) => {
      md = false
    })
  }
}
</script>

<style scoped>
.diamond{
  cursor: -webkit-grab;
  display: inline-block;
  width: 50px;
  height: 50px;
  background-color: #bababa;
}
.nosel{
  user-select: none;
}
</style>
