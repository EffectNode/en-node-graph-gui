<template>
  <div class="full" ref="mounter">
  </div>
</template>

<script>
export default {
  props: {
    node: {},
    parentNode: {},
    isRootNode: {},

    nodes: {},
    components: {}
  },
  data () {
    return {
      scenes: {},

      composer: false,
      camera: false,
      scene: false,

      mouse: { x: 0, y: 0 },
      renderer: false,
      camPosition: { x: 0, y: 0, z: 500 }
    }
  },
  created () {
    this.$on('addToParent', ({ parent }) => {
      console.log(this.node.title, 'addToParent', parent)
    })
    this.$on('addChild', ({ child }) => {
      if (child.node.type === 'camera') {
        this.camera = child.camera
      }
      if (child.node.type === 'scene') {
        this.scenes[child.node._id] = child.scene
      }
      console.log(this.node.title, 'addChild', child.node.title)
    })
    this.$on('removeFromParent', ({ parent }) => {
      console.log(this.node.title, 'removeFromParent', parent)
    })
    this.$on('removeChild', ({ child }) => {
      console.log(this.node.title, 'removeChild', child.node.title)
    })
  },
  beforeDestroy () {
    this.stop()
    this.$emit('remove', this)
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.setupRenderer()
      this.setupSizer()
      this.syncSize()
      this.start()
      this.$emit('ready', this)
    },
    setupRenderer () {
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true
      })
      this.renderer.domElement.style.marginBottom = '-6px'
      this.$refs['mounter'].appendChild(this.renderer.domElement)
    },
    setupSizer () {
      this.getSizeInfo()
      window.addEventListener('resize', this.getSizeInfo, false)
    },
    getSizeInfo () {
      if (!this.$refs['mounter']) {
        return
      }
      var rect = this.$refs['mounter'].getBoundingClientRect()
      this.rect = rect
      this.size = {
        width: rect.width,
        height: rect.height,
        aspect: rect.width / rect.height
      }
      this.dpi = 2.0 // window.devicePixelRatio || 1.0
    },
    syncSize () {
      let sync = () => {
        let { composer, renderer, camera, size, dpi, control } = this
        if (control) {
          control.update()
        }
        if (composer) {
          composer.setSize(size.width * dpi, size.height * dpi)
        }
        renderer.setPixelRatio(dpi)
        renderer.setSize(size.width, size.height)
        if (camera) {
          camera.aspect = size.width / size.height
          camera.updateProjectionMatrix()
        }
      }
      sync()
      window.addEventListener('resize', sync, false)

      this.$refs['mounter'].addEventListener('mousemove', (evt) => {
        this.mouse.x = evt.pageX
        this.mouse.y = evt.pageY
      }, false)
    },
    stop () {
      window.cancelAnimationFrame(this.rAFID)
    },
    start () {
      let rAF = () => {
        this.rAFID = window.requestAnimationFrame(rAF)
        this.render()
      }
      this.rAFID = window.requestAnimationFrame(rAF)
    },
    render () {
      let { scene, camera, renderer, composer } = this
      if (scene && camera && renderer && composer) {
        composer.render()
      } else if (scene && camera && renderer) {
        renderer.render(scene, camera)
      }
    }
  }
}
</script>

<style>

</style>
