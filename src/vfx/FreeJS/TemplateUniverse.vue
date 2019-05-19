<template>
  <div class="u-full" ref="mounter">
    <Scene @ready="(v) => { scene = v; init() }" >

      <Object3D v-if="world">
        <PhysicsItem :size="oo.size" :move="oo.move" :id="oo._id" :geo="oo.geo" :idb="idb" :world="world"  :key="oo._id" v-for="oo in boxes">
          <Object3D :quaternion="oo.quaternion" :position="oo.position">
            <Box :size="oo.size" :color="oo.color"></Box>
          </Object3D>
        </PhysicsItem>
      </Object3D>

      <PhysicsItem v-if="world" :size="{ x: 300, y: 5, z: 300 }" :move="false" :id="'_floor'" :geo="'box'" :idb="idb" :world="world">
        <Object3D :position="{ x: 0, y: 0, z: 5 }" :quaternion="{ x: 0.0, y: 0.0, z: 0.2, w: 0.8 }">
          <Box :size="{ x: 300, y: -4.5, z: 300 }" :color="`rgb(20,20,20)`"></Box>
        </Object3D>
      </PhysicsItem>

    </Scene>
  </div>
</template>

<script>
// imports
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

import FreeJS from '../FreeJS'
import * as THREE from 'three'
import Box from '../Items/Box.vue'
import * as OIMO from 'oimo'

let getRD = () => {
  return `_${(Math.random() * 1000000).toFixed(0)}`
}

export default {
  props: {
    toucher: {}
  },
  components: {
    ...FreeJS,
    Box
  },
  data () {
    return {
      idb: [],
      boxes: [
      ],
      size: false,
      dpi: 2,
      rAFID: 0,
      scene: false,
      renderer: false,
      camera: false,
      readyInit: false,
      world: false,
      Settings: {
        camPos: [
          0,
          140.619363082149615,
          -300.212497523395
        ],
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
  },
  created () {
    let buck = []
    for (var i = 0; i < 50; i++) {
      buck.push({
        _id: getRD(),
        geo: 'box',
        move: true,
        size: { x: 40, y: 4, z: 4 },
        color: `hsl(${(360 * Math.random()).toFixed(0)}, 100%, 64%)`,
        quaternion: { x: Math.random(), y: Math.random(), z: Math.random(), w: 0.0 },
        position: { x: -50 + 100 * Math.random(), y: -50 + 100 * Math.random() + 200 + 1000 * Math.random(), z: -50 + 100 * Math.random() },
      })
    }
    this.boxes = buck
  },
  mounted () {
    this.setupPhysics()
  },
  watch: {
  },
  methods: {
    init () {
      this.setupRenderer()
      this.setupSizer()
      this.setupCamera()
      this.setupComposer()
      this.setupControl()
      this.syncSize()
      this.start()
    },
    setupPhysics () {
      this.world = new OIMO.World({
        timestep: 1 / 60,
        iterations: 8,
        broadphase: 2, // 1 brute force, 2 sweep and prune, 3 volume tree
        worldscale: 8, // scale full world
        random: true,  // randomize sample
        info: false,   // calculate statistic or not
        gravity: [0,-9.8,0]
      })
      this.world.postLoop = () => {
        this.postLoop()
      }
    },
    postLoop () {
      this.idb.forEach((entry) => {
        let body = entry.body
        let object = entry.object
        let defaultPos = entry.defaultPos

        if (!body.sleeping) {
          object.position.copy(body.getPosition())
          object.quaternion.copy(body.getQuaternion())

          if (object.position.y < -330) {
            body.resetPosition(defaultPos.x, defaultPos.y, defaultPos.z)
          }
        }
      })
    },
    setupControl () {
      var control = new THREE.OrbitControls(this.camera, this.renderer.domElement)
      this.control = control
      control.enableDamping = true
      control.enableKeys = false
    },
    setupRenderer () {
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: false
      })
      this.$refs['mounter'].appendChild(this.renderer.domElement)
    },
    setupCamera () {
      let { size, Settings } = this
      let fov = 75
      let aspect = size.width / size.height
      let near = 0.1
      let far = 10000

      let camera = this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
      camera.position.fromArray(Settings.camPos)
      camera.lookAt(0,0,0)
    },
    setupComposer () {
      let composer = this.composer = new THREE.EffectComposer(this.renderer)
      let { scene, camera, size, dpi, Settings } = this
      let renderBG = new THREE.RenderPass(scene, camera)

      let bloomPass = new THREE.UnrealBloomPass(new THREE.Vector2(size.width * dpi, size.height * dpi), 1.5, 0.4, 0.85)
      bloomPass.renderToScreen = true

      bloomPass.threshold = Settings.bloomPass.threshold
      bloomPass.strength = Settings.bloomPass.strength
      bloomPass.radius = Settings.bloomPass.radius

      composer.addPass(renderBG)
      composer.addPass(bloomPass)
    },
    setupSizer () {
      this.getSizeInfo()
      window.addEventListener('resize', this.getSizeInfo, false)
    },
    getSizeInfo () {
      var rect = this.$refs['mounter'].getBoundingClientRect()
      this.size = {
        width: rect.width,
        height: rect.height,
        aspect: rect.width / rect.height
      }
      this.dpi = 2.0 //window.devicePixelRatio || 1.0
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
      let { scene, camera, renderer, composer, world } = this
      if (world) {
        world.step()
      }
      if (scene && camera && renderer && composer) {
        composer.render()
      } else if (scene && camera && renderer) {
        renderer.render(scene, camera)
      }
    }
  }
}
</script>

<style scoped>
.full {
  width: 100%;
  height: 100%;
}
</style>
