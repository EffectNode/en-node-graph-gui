<template>
  <g :style="mover">
    <rect v-if="type === 'box'" ref="node" class="node" @click="$emit('click')" :width="60" :height="60" :fill="fill" fill-opacity="0.5"  stroke="none" >
    </rect>

    <g v-if="type === 'circle'"  :style="`transform: translate(${size / 2}px, ${size / 2}px)`">
      <circle ref="node" class="node" @click="$emit('click')" :r="size / 2" :fill="fill" fill-opacity="0.5" stroke="none">
      </circle>
    </g>

    <text style="user-select: none;" :x="size / 2" y="-5" text-anchor="middle">{{ title }}</text>
  </g>
</template>

<script>
import { setTimeout, clearTimeout } from 'timers'
export default {
  props: {
    uniq: {},
    isRoot: {
      default: false
    },
    isActive: {
      default: false
    },
    title: {
      default () {
        return ''
      }
    },
    type: {
      default: 'rect'
    },
    size: {
      default: 60
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
      fill: this.isActive ? `url(#${this.uniq}rainbow-gradient-movin)` : `url(#${this.uniq}rainbow-gradient)`,
      showTitle: false || this.isRoot,
      int: 0,
      mover: {},
      isDown: false
    }
  },
  watch: {
    isActive () {
      this.fill = this.isActive ? `url(#${this.uniq}rainbow-gradient-movin)` : `url(#${this.uniq}rainbow-gradient)`
    },
    pos: {
      deep: true,
      handler () {
        this.doLayout()
      }
    }
  },
  mounted () {
    let tap = 0
    let inttt = 0
    let h = {
      onMD: (evt) => {
        if (evt.touches && evt.touches[0]) {
          evt.preventDefault()
          h.tsx = evt.touches[0].pageX
          h.tsy = evt.touches[0].pageY
        }
        this.isDown = true
        inttt = 1
        clearTimeout(tap)
        tap = setTimeout(() => {
          inttt = -1
        }, 350)
      },
      onMM: (evt) => {
        inttt = -1
        // clearTimeout(tap)
        // tap = setTimeout(() => {
        //   inttt = -1
        // }, 350)

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
      onMUClick: () => {
      },
      onMU: (evt) => {
        this.isDown = false
        if (inttt === 1) {
          this.$emit('click')
        }
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
    this.$refs['node'].addEventListener('mouseleave', h.onMUClick, false)
    this.clean = () => {
      this.$refs['node'].removeEventListener('mousedown', h.onMD)
      window.removeEventListener('mouseup', h.onMU)
      window.removeEventListener('mousemove', h.onMM)
      window.removeEventListener('mouseleave', h.onMU)
      this.$refs['node'].removeEventListener('mouseleave', h.onMUClick)
    }
  },
  methods: {
    doLayout () {
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
