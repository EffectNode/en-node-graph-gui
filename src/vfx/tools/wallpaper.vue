<template>
  <div>
  </div>
</template>

<script>
import NProgress from 'nprogress'
import * as THREE from 'three'
import manager from '@/api/loadme.js'
THREE.Cache.enabled = true

import { setInterval, clearInterval, setTimeout } from 'timers'
export default {
  props: {
    scroller: {},
    engine: {},
    imageURL: {
      required: true
    },
    depth: {
      required: true
    }
  },
  components: {
    // Object3D: require('../../vfx/FreeJS/Object3D.vue').default
  },
  created () {
    this.$on('add', (v) => {
      this.$parent.$emit('add', v)
    })
    this.$on('remove', (v) => {
      this.$parent.$emit('remove', v)
    })
  },
  data () {
    return {
      // imageURL: false,
      mountable: false,
      texture: false
    }
  },
  watch: {
    imageURL () {
      this.mounter()
    }
  },
  async mounted () {
    if (this.imageURL) {
      this.mounter()
    }
  },
  methods: {
    async mounter () {
      // NProgress.start()
      if (this.mountable) {
        this.$parent.$emit('remove', this.mountable)
        if (this.renderable) {
          this.mountable.remove(this.mountable)
        }
      }

      if (this.syncInterval) {
        clearInterval(this.syncInterval)
      }
      let size = await this.loadTexture()
      let panel = this.calcInfo({ camera: this.engine.camera, depth: this.depth || -500 })
      // let screen = this.calcInfo({ camera: this.engine.camera, depth: 0 })
      let rect = {}

      // horizontal
      if (size.a > 1) {
        rect = {
          x: panel.screenHeight * size.a,
          y: panel.screenHeight
        }
      } else {
        rect = {
          x: panel.screenWidth,
          y: panel.screenWidth / size.a
        }
      }

      this.createItem(rect, panel)

      this.renderable.position.z = this.depth
      // vertical
      if (size.a <= 1) {
        this.renderable.position.y = (rect.y * -0.5 + panel.screenHeight * 0.5)
        this.renderable.position.x = 0
      } else {
        this.renderable.position.y = 0
        this.renderable.position.x = (rect.x * -0.5 + panel.screenWidth * 0.5)
      }
      this.renderable.scale.y = -1

      this.syncInterval = setInterval(() => {
        if (size.a <= 1) {
          // vertical
          this.mountable.position.x = 0
          this.mountable.position.y = (rect.y - panel.screenHeight * 1) * this.scroller.y
        } else {
          // horizontal
          this.mountable.position.x = (rect.x - panel.screenWidth * 1) * (1.0 - this.scroller.x)
          this.mountable.position.y = 0
        }

        if (size.a <= 1) {
          this.scroller.enable.y = true
          this.scroller.enable.x = false
        } else {
          this.scroller.enable.y = false
          this.scroller.enable.x = true
        }
      }, 1)

      this.scroller.bound.yMin = 60
      this.scroller.bound.yMax = rect.y - panel.screenHeight - 60
      this.scroller.bound.xMin = 60
      this.scroller.bound.xMax = rect.x - panel.screenWidth - 60

      this.$parent.$forceUpdate()

      // if (size.a > 1) {
      //   this.scroller.mover.position.x = -this.mountable.position.x
      // }

      this.$parent.$emit('add', this.mountable)
      // this.$parent.$emit('element', this.mountable)
      this.$emit('element', this.mountable)
      this.$emit('size', size)
      this.$emit('panel', panel)
      // this.$emit('dimension', { isVertical: size.a <= 1, width: rect.x, height: rect.y, panel })
      // NProgress.done()
    },
    calcInfo ({ camera, depth }) {
      var aspect = camera.aspect
      var dist = camera.position.z - (depth) // item
      var vFOV = THREE.Math.degToRad(camera.fov) // convert vertical fov to radians
      var screenHeight = 2 * Math.tan(vFOV / 2) * dist // visible height
      var screenWidth = screenHeight * aspect // visible width
      var ans = {
        aspect,
        dist,
        vFOV,
        screenWidth,
        screenHeight
      }
      return ans
    },
    loadTexture () {
      // this.imageURL = require('./starry-sky-375.jpg')
      return new Promise((resolve, reject) => {
        this.texture = new THREE.TextureLoader(manager).load(this.imageURL, () => {

          setTimeout(() => {
            let img = this.texture.image
            let size = {
              x: img.width,
              y: img.height,
              a: img.width / img.height
            }
            resolve(size)
          }, 0)
          // img.src = this.imageURL
        })
        // var img = new Image()
        // img.onload = () => {
        //   let size = {
        //     x: img.width,
        //     y: img.height,
        //     a: img.width / img.height
        //   }
        //   resolve(size)
        // }
      })
    },
    createItem (size, panel) {
      let geo = new THREE.PlaneBufferGeometry(size.x, size.y, 4, 4)
      let mat = new THREE.ShaderMaterial({
        uniforms: {
          texture: {
            value: this.texture
          }
        },
        transparent: true,
        vertexShader: `
          #include <common>

          varying vec3 vPos;
          varying vec2 vUv;
          uniform float time;

          void main (void) {
            vUv = uv;
            vPos = position;
            // vPos.x = vPos.x + sin(vPos.x + time);
            // vPos.y = vPos.y + cos(vPos.y + time);
            // vPos.z = vPos.z + tan(vPos.z + time);

            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vec4 outputPos = projectionMatrix * mvPosition;
            gl_Position = outputPos;
            gl_PointSize = 1.0;
          }
        `,
        fragmentShader: `
          varying vec3 vPos;
          varying vec2 vUv;
          uniform sampler2D texture;

          void main () {
            vec4 tColor = texture2D(texture, vec2(vUv.x, 1.0 - vUv.y));

            gl_FragColor = vec4(tColor.rgb, tColor.a * 1.0);
          }
        `
      })
      this.mountable = new THREE.Object3D()
      this.renderable = new THREE.Mesh(geo, mat)

      this.mountable.add(this.renderable)
    }
  },
  beforeDestroy () {
    this.$parent.$emit('remove', this.mountable)
  }
}
</script>

<style>

</style>
