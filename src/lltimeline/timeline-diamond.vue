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
        width: `${this.$parent.$parent.sizer * 2}px`,
        height: `${this.$parent.$parent.sizer}px`
      }
    }
  },
  mounted () {
    //
    let dom = this.$el
    let md = false

    let baseTime = this.$parent.$parent.BASE_TIME
    let width = this.$parent.$parent.BASE_WIDTH

    let state = {
      sx: 0,
      dx: 0,
      ax: 0
    }

    dom.addEventListener('touchstart', (evt) => {
      if (evt.touches[0]) {
        md = true
        state.sx = evt.touches[0].pageX
      }
    })
    dom.addEventListener('mousedown', (evt) => {
      md = true
      state.sx = evt.pageX
    })
    window.addEventListener('touchmove', (evt) => {
      if (md) {
        let now = evt.touches[0].pageX
        let deltaX = now - state.sx
        state.dx = deltaX
        // let ww = 1440
        // let ratio = baseTime / this.$parent.$parent.initBaseTime
        if (this.mode === 'start') {
          this.$parent.track.start += Number(deltaX / (width) * baseTime)
        } else if (this.mode === 'end') {
          this.$parent.track.end += Number(deltaX / (width) * baseTime)
        }

        if (this.$parent.track.start < 0) {
          this.$parent.track.start -= Number(deltaX / (width) * baseTime)
          this.$parent.track.end -= Number(deltaX / (width) * baseTime)
        }

        this.$parent.syncCSS()
        this.$parent.$forceUpdate()
        this.$forceUpdate()
        state.ax += deltaX
        state.sx = now
      }
    })
    window.addEventListener('mousemove', (evt) => {
      if (md) {
        let now = evt.pageX
        let deltaX = now - state.sx
        state.dx = deltaX
        // let ww = 1440

        // let ratio = baseTime / this.$parent.$parent.initBaseTime
        if (this.mode === 'start') {
          this.$parent.track.start += Number(deltaX / (width) * baseTime)
        } else if (this.mode === 'end') {
          this.$parent.track.end += Number(deltaX / (width) * baseTime)
        }

        if (this.$parent.track.start < 0) {
          this.$parent.track.start -= Number(deltaX / (width) * baseTime)
          this.$parent.track.end -= Number(deltaX / (width) * baseTime)
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

    // let dom = this.$el
    // let md = false
    // let state = {
    //   start: 0,
    //   delta: 0
    // }
    // dom.addEventListener('mousedown', (evt) => {
    //   md = true
    //   state.start = this.editor.timelinePercentage * this.editor.totalTime
    // })
    // window.addEventListener('mousemove', (evt) => {
    //   if (md) {
    //     state.now = this.editor.timelinePercentage * this.editor.totalTime

    //     if (this.mode === 'start') {
    //       this.$parent.track.start += state.now - state.start
    //     } else if (this.mode === 'end') {
    //       this.$parent.track.end += state.now - state.start
    //     }

    //     if (this.$parent.track.start < 0) {
    //       this.$parent.track.start -= state.now - state.start
    //     }

    //     state.start = state.now

    //     this.$parent.syncCSS()
    //     this.$parent.$forceUpdate()
    //     this.$forceUpdate()
    //   }
    // })
    // window.addEventListener('mouseup', (evt) => {
    //   md = false
    // })
  }
}
</script>

<style scoped>
.diamond{
  cursor: -webkit-grab;
  display: inline-block;
  width: 50px;
  height: 25px;
  background-color: #272727;
  color: white;
}
.nosel{
  user-select: none;
}
</style>
