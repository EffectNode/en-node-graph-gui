<template>
  <g :style="mover">
    <rect v-if="type === 'box'" ref="node" class="node" :width="60" :height="60" :fill="fill"  stroke="none" >
    </rect>

    <g v-if="type === 'circle'"  :style="`transform: translate(${size / 2}px, ${size / 2}px)`">
      <circle ref="node" class="node" :r="size / 2" :fill="fill" stroke="none">
      </circle>
    </g>

    <text class="font" style="user-select: none;" :x="size / 2" y="-5" text-anchor="middle">{{ title }}</text>
  </g>
</template>

<script>
import { setTimeout, clearTimeout } from 'timers'

let composMap = {}

export default {
  props: {
    node: {},
    nodes: {},
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
      fill: `url(#${this.uniq}rainbow-gradient)`, // this.isActive ? `url(#${this.uniq}rainbow-gradient-movin)` : `url(#${this.uniq}rainbow-gradient)`,
      showTitle: false || this.isRoot,
      int: 0,
      mover: {},
      isDown: false,
      composMap
    }
  },
  watch: {
    isActive () {
      this.sync()
    },
    pos: {
      deep: true,
      handler () {
        this.doLayout()
      }
    }
  },
  mounted () {
    this.sync()
    this.composMap[this.node._id] = this

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
        }, 150)
      },
      onMM: (evt) => {
        clearTimeout(tap)
        tap = setTimeout(() => {
          inttt = -1
        }, 150)

        if (this.isDown) {
          this.nodes.forEach((n) => {
            n.isOverlapping = false
            n.isOverlappingWith = false
            n.hasFound = false
            this.composMap[n._id].sync()
            // this.composMap[n._id].$refs['node'].style.transform = `translateZ(0px)`
          })
          // this.$refs['node'].style.transform = `translateZ(10px)`

          // if (evt.target.node)
          if (!this.node.cannotDrop) {
            let cNode = this.node
            let stat = this.nodes.filter(n => n._id !== cNode._id).reduce((info, n) => {
              let x1 = n.pos.x
              let y1 = n.pos.y
              let x2 = cNode.pos.x
              let y2 = cNode.pos.y

              var a = x1 - x2
              var b = y1 - y2

              var c = Math.sqrt(a * a + b * b)
              if (c < info.cursor && c < 35) {
                info.cursor = c
                info.overlapNode = n
                info.title = n.title
              }
              return info
            }, { title: '', cursor: 100000000000000, overlapNode: false })

            if (stat.overlapNode) {
              stat.overlapNode.isOverlapping = true
              stat.overlapNode.isOverlappingWith = this.node._id
              this.node.hasFound = true
              this.composMap[stat.overlapNode._id].sync()
            }

            // console.log(evt.target.node.title)
            // console.log(stat.title, JSON.stringify(stat))
          }
          // console.log(evt)
        }

        let sendMovement = 'desktop'

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

        if (this.isDown && sendMovement === 'desktop') {
          this.$emit('move', {
            dx: evt.movementX,
            dy: evt.movementY
          })
        }
      },
      onMUClick: () => {
      },
      // running on all nodes
      onMU: (evt) => {
        let doClick = false
        this.isDown = false
        if (inttt === 1) {
          doClick = true
        }

        this.node.isActive = false
        let overlappingNode = this.nodes.find(a => a.isOverlapping)
        if (overlappingNode && overlappingNode._id !== this.node._id && this.node.hasFound) {
          this.node.to = overlappingNode._id
          this.node.isActive = true
          this.$parent.cleanLayout({ instant: false, goHome: false, resetZoom: false, goNode: false })
          this.$emit('dropped')
        }

        if (doClick) {
          this.node.isActive = true
          let rect = this.getRect()
          this.$emit('click', { rect })
        }

        setTimeout(() => {
          this.node.isOverlapping = false
          this.node.isOverlappingWith = false
          this.sync()
          this.$forceUpdate()
        }, 500)
      },
      onMUMe: (evt) => {
        if (inttt !== 1) {
          this.$parent.cleanLayout({ instant: false, goHome: false, resetZoom: false, goNode: false })
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
    this.$refs['node'].addEventListener('mouseup', h.onMUMe, false)
    this.clean = () => {
      this.$refs['node'].removeEventListener('mousedown', h.onMD)
      window.removeEventListener('mouseup', h.onMU)
      window.removeEventListener('mousemove', h.onMM)
      window.removeEventListener('mouseleave', h.onMU)
      this.$refs['node'].removeEventListener('mouseleave', h.onMUClick)
      this.$refs['node'].removeEventListener('mouseup', h.onMUMe)
    }
  },
  methods: {
    sync () {
      if (this.node.isOverlapping) {
        this.fill = `url(#${this.uniq}hover-gradient-movin)`
      } else {
        this.fill = this.isActive ? `url(#${this.uniq}rainbow-gradient-movin)` : `url(#${this.uniq}rainbow-gradient)`
      }
      return this.fill
    },
    getRect () {
      let rect = this.$refs['node'].getBoundingClientRect()
      return rect
    },
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
.font{
  fill: white;
  color: white;
}
</style>
