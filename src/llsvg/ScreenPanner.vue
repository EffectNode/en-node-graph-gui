<template>
  <rect :width="win.width" :height="win.height" fill="transparent" stroke="none">
  </rect>
</template>

<script>
export default {
  props: {
    win: {},
    svg: {}
  },
  data () {
    return {
      isDown: false
    }
  },
  mounted () {
    let h = {
      onMD: (evt) => {
        if (evt.touches && evt.touches[0]) {
          evt.preventDefault()
          h.tsx = evt.touches[0].pageX
          h.tsy = evt.touches[0].pageY
        }
        this.isDown = true
      },
      onMM: (evt) => {
        if (evt.touches && evt.touches[0]) {
          evt.preventDefault()
          h.dx = evt.touches[0].pageX - h.tsx
          h.dy = evt.touches[0].pageY - h.tsy
          h.tsx = evt.touches[0].pageX
          h.tsy = evt.touches[0].pageY
          if (this.isDown) {
            this.$emit('move', {
              dx: h.dx,
              dy: h.dy
            })
          }

          return
        }
        if (this.isDown) {
          this.$emit('move', {
            dx: evt.movementX,
            dy: evt.movementY
          })
          // console.log(evt)
        }
      },
      onMU: (evt) => {
        this.isDown = false
      }
    }
    // console.log(this)
    this.$el.addEventListener('touchstart', h.onMD, false)
    this.$el.addEventListener('touchend', h.onMU, false)
    this.$el.addEventListener('touchmove', h.onMM, false)
    this.$el.addEventListener('touchcancel', h.onMU, false)

    this.$el.addEventListener('mousedown', h.onMD, false)
    this.$el.addEventListener('mouseup', h.onMU, false)
    this.$el.addEventListener('mousemove', h.onMM, false)
    this.$el.addEventListener('mouseleave', h.onMU, false)
    this.clean = () => {
      this.$el.removeEventListener('mousedown', h.onMD)
      this.$el.removeEventListener('mouseup', h.onMU)
      this.$el.removeEventListener('mousemove', h.onMM)
      this.$el.removeEventListener('mouseleave', h.onMU)
    }
  },
  methods: {
  },
  beforeDestroy () {
    this.clean()
  }
}
</script>

<style>

</style>
