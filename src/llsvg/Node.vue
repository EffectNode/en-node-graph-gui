<template>
  <g :style="mover">
    <rect v-if="type === 'rect'" ref="node" class="node" @click="$emit('click')" :width="60" :height="60" fill="#bababa" stroke="none">
    </rect>

    <g v-if="type === 'circle'"  :style="`transform: translate(30px, 30px)`">
      <circle ref="node" class="node" @click="$emit('click')" :r="30" fill="#bababa" stroke="none">
      </circle>
    </g>
  </g>
</template>

<script>
import { setTimeout, clearTimeout } from 'timers'
export default {
  props: {
    type: {
      default: 'rect'
    },
    pos: {
      default () {
        return {
          x: 0,
          y: 0
        }
      }
    }
  },
  data () {
    return {
      int: 0,
      mover: {},
      isDown: false
    }
  },
  watch: {
    pos: {
      deep: true,
      handler () {
        this.resolve()
      }
    }
  },
  mounted () {
    let tap = 0
    let h = {
      onMD: (evt) => {
        if (evt.touches && evt.touches[0]) {
          evt.preventDefault()
          h.tsx = evt.touches[0].pageX
          h.tsy = evt.touches[0].pageY
        }
        this.isDown = true
        this.int = 1
        clearTimeout(tap)
        tap = setTimeout(() => {
          this.int = -1
        }, 350)
      },
      onMM: (evt) => {
        this.int = 1
        clearTimeout(tap)
        tap = setTimeout(() => {
          this.int = -1
        }, 350)

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
        if (this.int === 1) {
          this.$emit('click')
        }
        this.isDown = false
      }
    }
    // console.log(this)
    this.$refs['node'].addEventListener('touchstart', h.onMD, false)
    this.$refs['node'].addEventListener('touchend', h.onMU, false)
    window.addEventListener('touchmove', h.onMM, false)
    window.addEventListener('touchcancel', h.onMU, false)

    this.$refs['node'].addEventListener('mousedown', h.onMD, false)
    window.addEventListener('mouseup', h.onMU, false)
    window.addEventListener('mousemove', h.onMM, false)
    window.addEventListener('mouseleave', h.onMU, false)
    this.clean = () => {
      this.$refs['node'].removeEventListener('mousedown', h.onMD)
      window.removeEventListener('mouseup', h.onMU)
      window.removeEventListener('mousemove', h.onMM)
      window.removeEventListener('mouseleave', h.onMU)
    }
  },
  methods: {
    resolve () {
      this.mover = {
        transform: `translate3d(${this.pos.x}px, ${this.pos.y}px, 1px)`
      }
    }
  },
  beforeDestroy () {
    this.clean()
  }
}
</script>

<style scoped>
.node{
  cursor: pointer;
}
</style>
