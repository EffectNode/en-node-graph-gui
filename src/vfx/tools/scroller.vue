<template>
  <Object3D>
    <slot name="default" v-if="scrollerTarget" :enable="scrollerState.enable" :mover="scrollerTarget" :time="time" :bound="bound" :y="scrollerTarget.position.y / bound.yMax" :x="scrollerTarget.position.x / bound.xMax"></slot>
  </Object3D>
</template>

<script>
import * as THREE from 'three'

export default {
  components: {
    Object3D: require('../FreeJS/Object3D.vue').default
  },
  props: {
    toucher: {
      required: true
    },
    enableX: {
      type: Boolean,
      default: false
    },
    enableY: {
      type: Boolean,
      default: true
    },
    bound: {
      required: true,
      default () {
        return {
          yMax: 0,
          yMin: 0,
          xMax: 0,
          xMin: 0
        }
      }
    }
  },
  watch: {
  },
  data () {
    return {
      time: 0,
      rect: false,
      aspect: 1.0,

      // TWEEN,
      scrollerTarget: false,
      scrollStack: {},
      srAFID: 0,
      scrollerState: {
        tsX: 0,
        tsY: 0,
        dX: 0,
        dY: 0,
        status: '',
        enable: {
          x: false,
          y: true
        }
      }
    }
  },
  computed: {
  },
  mounted () {
    this.onSetup()
  },
  created () {
    this.$on('add', (v) => {
      this.$parent.$emit('add', v)
    })
    this.$on('remove', (v) => {
      this.$parent.$emit('remove', v)
    })
  },
  methods: {

    install () {
      var ev = this.evlt = {
        resizer: () => {
          this.rect = this.toucher.getBoundingClientRect()
          this.aspect = this.rect.width / this.rect.height
        },
        tsData: false,
        tmData: false,
        emitClick: false,
        onTS: (evt) => {
          evt.preventDefault()
          ev.tsData = { type: 'click', isIn: true, touches: evt.touches, pageX: evt.touches[0].pageX, pageY: evt.touches[0].pageY, rect: this.rect }
          ev.emitClick = true
          setTimeout(() => {
            ev.emitClick = false
          }, 345)
          this.sendInput({ type: 'ts', isIn: true, touches: evt.touches, pageX: evt.touches[0].pageX, pageY: evt.touches[0].pageY, rect: this.rect })
        },
        onTM: (evt) => {
          evt.preventDefault()
          var dx = ev.tsData.pageX - evt.touches[0].pageX
          var dy = ev.tsData.pageY - evt.touches[0].pageY
          if (Math.sqrt(dx * dx + dy * dy) > 80) {
            ev.emitClick = false
          }
          this.sendInput({ type: 'tm', touches: evt.touches, pageX: evt.touches[0].pageX, pageY: evt.touches[0].pageY, rect: this.rect })
        },
        onTE: (evt) => {
          if (ev.emitClick) {
            ev.emitClick = false
            this.sendInput(ev.tsData)
          }
          this.sendInput({ type: 'te', isIn: false })
        },
        onMDN: (evt) => {
          this.sendInput({ type: 'mdn', pageX: evt.clientX, pageY: evt.clientY, rect: this.rect })
        },
        onMUP: (evt) => {
          this.sendInput({ type: 'mup', pageX: evt.clientX, pageY: evt.clientY, rect: this.rect })
        },
        onMV: (evt) => {
          evt.preventDefault()
          this.sendInput({ type: 'mv', pageX: evt.pageX, pageY: evt.pageY, rect: this.rect })
        },
        onMO: (evt) => {
          this.sendInput({ isIn: true })
        },
        onME: (evt) => {
          this.sendInput({ isIn: true })
        },
        onML: (evt) => {
          this.sendInput({ isIn: false })
        },
        onCL: (evt) => {
          this.sendInput({ type: 'click', pageX: evt.pageX, pageY: evt.pageY, rect: this.rect })
        },
        onWHL: (evt) => {
          if (evt.target === this.toucher) {
            evt.preventDefault()
          }
          this.sendInput({ type: 'wheel', deltaX: -evt.deltaX, deltaY: evt.deltaY })
        }
      }
      ev.resizer()
      console.log('emitting refresher')

      var container = this.toucher
      container.addEventListener('mouseover', ev.onMO, false)
      container.addEventListener('mouseenter', ev.onME, false)
      container.addEventListener('mouseleave', ev.onML, false)

      container.addEventListener('mousemove', ev.onMV, false)
      container.addEventListener('mousedown', ev.onMDN, false)
      container.addEventListener('mouseup', ev.onMUP, false)

      container.addEventListener('click', ev.onCL, false)
      container.addEventListener('wheel', ev.onWHL, false)

      container.addEventListener('touchstart', ev.onTS, false)
      container.addEventListener('touchmove', ev.onTM, false)
      container.addEventListener('touchend', ev.onTE, false)
      container.style['-webkit-tap-highlight-color'] = `rgba(0,0,0,0)`
      window.addEventListener('resize', ev.resizer, false)
      this.uninstaller = () => {
        container.removeEventListener('mouseover', ev.onMO)
        container.removeEventListener('mouseenter', ev.onME)
        container.removeEventListener('mouseleave', ev.onML)

        container.removeEventListener('mousemove', ev.onMV)
        container.removeEventListener('mousedown', ev.onMDN)
        container.removeEventListener('mouseup', ev.onMUP)

        container.removeEventListener('click', ev.onCL)
        container.removeEventListener('wheel', ev.onWHL)

        container.removeEventListener('touchstart', ev.onTS)
        container.removeEventListener('touchmove', ev.onTM)
        container.removeEventListener('touchend', ev.onTE)
        window.removeEventListener('resize', ev.resizer)
      }
    },
    onSetup (v) {
      this.install()

      this.scrollStack.scrollMe = this.scrollMe
      this.scrollerTarget = new THREE.Object3D()
      this.scrollerState.enable.x = this.enableX
      this.scrollerState.enable.y = this.enableY

      var rAF = () => {
        this.srAFID = window.requestAnimationFrame(rAF)
        this.time = window.performance.now() * 0.001
        // this.$emit('scroll', {
        //   y: this.scrollerTarget.position.y / this.bound.yMax,
        //   x: this.scrollerTarget.position.x / this.bound.xMax
        // })

        if (this.scrollerState.enable.y) {
          this.scrollerTarget.position.y -= this.scrollerState.dY * 150.0
          this.scrollerState.dY *= 0.954321
          this.scrollerPYFast()
        }
        if (this.scrollerState.enable.x) {
          this.scrollerTarget.position.x -= this.scrollerState.dX * 150.0
          this.scrollerState.dX *= 0.954321
          this.scrollerPXFast()
        }
      }
      this.srAFID = window.requestAnimationFrame(rAF)
    },
    sendInput (args) {
      for (var stackKey in this.scrollStack) {
        let setMouse = this.scrollStack[stackKey]
        if (setMouse) {
          setMouse(args)
        }
      }
    },
    // tryMaximiseScroller ({ pos, extra, params }) {
    //   this.scrollerState.bound.yMax = (-pos.y * 1.25 - params.meshHeight) + (extra || 0)
    // },
    scrollerPYFast () {
      let bound = this.bound
      if (this.scrollerTarget) {
        if (this.scrollerTarget.position.y > bound.yMax) {
          let varying = { ...this.scrollerTarget.position }
          varying.y -= (varying.y - bound.yMax) * 0.85
          this.scrollerTarget.position.set(varying.x, varying.y, varying.z)
        }
        if (this.scrollerTarget.position.y < bound.yMin) {
          let varying = { ...this.scrollerTarget.position }
          varying.y -= (varying.y - bound.yMin) * 0.85
          this.scrollerTarget.position.set(varying.x, varying.y, varying.z)
        }
      }
    },
    scrollerPXFast () {
      let bound = this.bound
      if (this.scrollerTarget) {
        if (this.scrollerTarget.position.x > bound.xMax) {
          let varying = { ...this.scrollerTarget.position }
          varying.x -= (varying.x - bound.xMax) * 0.85
          this.scrollerTarget.position.set(varying.x, varying.y, varying.z)
        }
        if (this.scrollerTarget.position.x < bound.xMin) {
          let varying = { ...this.scrollerTarget.position }
          varying.x -= (varying.x - bound.xMin) * 0.85
          this.scrollerTarget.position.set(varying.x, varying.y, varying.z)
        }
      }
    },
    scrollMe (args) {
      switch (args.type) {
        case 'ts':
          this.scrollerTouchStart(args)
          break
        case 'tm':
          this.scrollerTouchMove(args)
          break
        case 'te':
          this.scrollerTouchEnd(args)
          break
        case 'wheel':
          this.scrollerWheel(args)
          break
      }
    },
    scrollerTouchStart ({ pageX, pageY, rect }) {
      this.scrollerState.status = 'ts'
      this.scrollerState.tsX = pageX - rect.left
      this.scrollerState.tsY = pageY - rect.top
    },
    scrollerTouchMove ({ pageX, pageY, rect }) {
      this.scrollerState.status = 'tm'

      this.scrollerState.dX = pageX - rect.left - this.scrollerState.tsX
      this.scrollerState.dY = pageY - rect.top - this.scrollerState.tsY

      this.scrollerState.tsX = pageX - rect.left
      this.scrollerState.tsY = pageY - rect.top

      this.scrollerState.dX *= 0.1
      this.scrollerState.dY *= 0.1
    },
    scrollerWheel ({ deltaX, deltaY }) {
      this.scrollerState.status = 'tm'

      this.scrollerState.dX = deltaX
      this.scrollerState.dY = -deltaY

      this.scrollerState.dX *= 0.1
      this.scrollerState.dY *= 0.1
    },
    scrollerTouchEnd () {

    },
    cleanupScroller () {
      window.cancelAnimationFrame(this.srAFID)
    }
  },
  beforeDestroy () {
    this.uninstaller()
  }
}
</script>

<style>

</style>
