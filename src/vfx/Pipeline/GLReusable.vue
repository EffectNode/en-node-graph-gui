<template>
  <div class="full u-layer-base">

    <Scene @ready="(v) => { scene = v; init() }" >
      <!-- <Box3></Box3> -->

      <!-- <Object3D @element="(v) => { rotator = v }">
        <GeoVert :exec="execStack" :renderer="renderer" :scene="scene" v-if="renderer && scene" />
      </Object3D> -->
      <slot name="scene" :audioAPI="audioAPI" :videoAPI="videoAPI" :camera="camera" v-if="scene && renderer && camera" :control="control" :scene="scene" :renderer="renderer" :execStack="execStack" :self="self"></slot>

    </Scene>

    <div class="u-layer" ref="mounter">
      <!-- OMG lol -->
    </div>

  </div>
</template>

<script>
// imports
/* eslint-disable */
import 'imports-loader?THREE=three!three/examples/js/postprocessing/EffectComposer.js'
import 'imports-loader?THREE=three!three/examples/js/postprocessing/RenderPass.js'
import 'imports-loader?THREE=three!three/examples/js/postprocessing/MaskPass.js'
import 'imports-loader?THREE=three!three/examples/js/postprocessing/ShaderPass.js'
import 'imports-loader?THREE=three!three/examples/js/shaders/CopyShader.js'
import 'imports-loader?THREE=three!three/examples/js/shaders/FXAAShader.js'
import 'imports-loader?THREE=three!three/examples/js/shaders/ConvolutionShader.js'
import 'imports-loader?THREE=three!three/examples/js/shaders/LuminosityHighPassShader.js'
import 'imports-loader?THREE=three!three/examples/js/postprocessing/UnrealBloomPass.js'

import 'imports-loader?THREE=three!three/examples/js/controls/OrbitControls.js'
import 'imports-loader?THREE=three!three/examples/js/controls/MapControls.js'
/* eslint-enable */

import FreeJS from '../FreeJS'
import * as THREE from 'three'
import * as AuAu from '../Simulation/GeoShader/audio/mic.js'

let getRD = () => {
  return `_${(Math.random() * 1000000).toFixed(0)}`
}

export default {
  getRD,
  props: {
    videoAPI: {},
    audioAPI: {},
    runComposer: {
      required: true
    },
    glow: {
      required: true
    },
    toucher: {}
  },
  components: {
    ...FreeJS

    // Brick: require('../Items/Brick.vue').default,
    // SimSim: require('../SceneItem/SimSim.vue').default,
    // GeoVert: require('../SceneItem/GeoVert.vue').default
  },
  data () {
    return {
      getRD,
      self: this,
      rotator: false,
      mouse: { x: 0, y: 0, z: 0 },
      rect: false,
      execStack: [],
      gameReady: false,
      audio: false,
      control: false,
      size: false,
      dpi: 2,
      rAFID: 0,
      scene: false,
      renderer: false,
      camera: false,
      readyInit: false,
      world: false,
      bloomPass: false,
      Settings: {
        camPosition: { x: 0, y: 0, z: 500 },
        bloomPass: {
          threshold: 0.0846740050804403,
          strength: 0.9551227773073666,
          radius: 1.0343776460626588
        }
      }
    }
  },
  beforeDestroy () {
    this.stop()
    this.scene.dispose()
  },
  created () {

  },
  mounted () {
    // var tiltHandler = (event) => {
    //   if (this.rotator) {
    //     this.rotator.rotation.x = event.beta / -90
    //     this.rotator.rotation.y = event.alpha / -90
    //   }
    // }
    // if (window.DeviceOrientationEvent) {
    //   window.addEventListener('deviceorientation', tiltHandler, false);
    // }
  },
  watch: {
    // bloomPassSettings: {
    //   deep: true,
    //   handler () {
    //     this.bloomPass.threshold = this.bloomPassSettings.threshold
    //     this.bloomPass.strength = this.bloomPassSettings.strength
    //     this.bloomPass.radius = this.bloomPassSettings.radius
    //   }
    // },
    glow: {
      deep: true,
      handler () {
        // console.log('abc')
        this.bloomPass.threshold = this.glow.threshold
        this.bloomPass.strength = this.glow.strength
        this.bloomPass.radius = this.glow.radius
        this.renderer.toneMappingExposure = Math.pow(this.glow.exposure, 4.0)
      }
    }
  },
  methods: {
    // startGame (gameReady, audio) {
    //   audio && this.setupAudio()
    //   this.$nextTick(() => {
    //     this.gameReady = gameReady
    //   })
    // },
    init () {
      this.setupRenderer()
      this.setupSizer()
      this.setupCamera()
      this.setupComposer()
      this.setupControl()
      this.syncSize()
      this.$emit('ready')
      this.start()
    },
    setupAudio () {
      this.audio = AuAu.setup()
    },
    setupControl () {
      var control = new THREE.OrbitControls(this.camera, this.toucher)
      this.control = control
      control.enableDamping = true
      control.enableKeys = false
    },
    setupControlMap () {
      // var controls = new THREE.OrbitControls(this.camera, this.toucher)
      var controls = new THREE.MapControls(this.camera, this.toucher)
      // controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)
      controls.enableDamping = true // an animation loop is required when either damping or auto-rotation are enabled
      controls.dampingFactor = 0.65
      controls.screenSpacePanning = true
      controls.minDistance = 1
      controls.enableRotate = false
      controls.keys.UP = 40
      controls.keys.BOTTOM = 38
      controls.keys.LEFT = 39
      controls.keys.RIGHT = 37

      // controls.maxDistance = 500
      // controls.maxPolarAngle = Math.PI / 2

      // control.keyPanSpeed = 20.0
      // // control.enableRotate = fals
      // control.enableDamping = true
      // control.dampingFactor = 1.3
      // control.enableKeys = true
      // control.enablePan = true

      this.control = controls
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
    setupCamera () {
      let { size } = this
      let fov = 75
      let aspect = size.width / size.height
      let near = 0.1
      let far = 100000000

      let camera = this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
      camera.position.x = this.Settings.camPosition.x
      camera.position.y = this.Settings.camPosition.y
      camera.position.z = this.Settings.camPosition.z
      // camera.lookAt(0, 0, 0)
    },
    setupComposer () {
      let composer = this.composer = new THREE.EffectComposer(this.renderer)
      let { scene, camera, size, dpi } = this

      let renderBG = new THREE.RenderPass(scene, camera)
      composer.addPass(renderBG)

      if (this.glow) {
        let bloomPass = new THREE.UnrealBloomPass(new THREE.Vector2(size.width * dpi, size.height * dpi), 1.5, 0.4, 0.85)
        bloomPass.renderToScreen = true
        this.bloomPass = bloomPass

        this.bloomPass.threshold = this.glow.threshold
        this.bloomPass.strength = this.glow.strength
        this.bloomPass.radius = this.glow.radius
        this.renderer.toneMappingExposure = Math.pow(this.glow.exposure, 4.0)

        composer.addPass(bloomPass)
      }
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
        control.update()
        composer.setSize(size.width * dpi, size.height * dpi)
        renderer.setPixelRatio(dpi)
        renderer.setSize(size.width, size.height)
        camera.aspect = size.width / size.height
        camera.updateProjectionMatrix()
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
      let { scene, camera, renderer, composer, mouse, rect } = this

      this.execStack.forEach(e => e({ mouse, rect }))

      // this.bloomPass.threshold = this.glow.threshold
      // this.bloomPass.strength = this.glow.strength
      // this.bloomPass.radius = this.glow.radius

      if (this.runComposer && scene && camera && renderer && composer) {
        composer.render()
      } else if (scene && camera && renderer) {
        renderer.render(scene, camera)
      }
    }
  }
}
</script>

<style>
@import url(../CSS/util.css);
html, body{
  margin: 0px;
  width: 100%;
  height: 100%;
}
</style>

<style scoped>
.full {
  width: 100%;
  height: 100%;
}
</style>
