<template>
  <Object3D>

    <Object3D :position="char.pos" :key="char._id" v-for="char in chars">
      <Character></Character>
    </Object3D>

  </Object3D>
</template>

<script>
import Box from '../Items/Box.vue'
import BoxBufferGeometry from '../Geometry/BoxBufferGeometry.vue'
import SphereBufferGeometry from '../Geometry/SphereBufferGeometry.vue'
import Mesh from '../Items/Mesh.vue'
import Points from '../Items/Points.vue'
import SolidMaterial from '../Material/SolidMaterial.vue'
import AudioNormalMaterial from '../Material/AudioNormalMaterial.vue'
import DevMaterial from '../Material/DevMaterial.vue'
import FreeJS from '../FreeJS'

export default {
  props: {
    execStack: {},
    audioAPI: {}
  },
  components: {
    ...FreeJS,
    DevMaterial,
    SolidMaterial,
    AudioNormalMaterial,
    Mesh,
    Points,
    BoxBufferGeometry,
    SphereBufferGeometry,
    Box,
    Character: require('../Items/Character.vue').default
  },
  data () {
    return {
      Math,
      chars: [],
      geo: {
        box: false,
        sphere: false
      },
      mat: {
        audio: false
      }
    }
  },
  watch: {
  },
  created () {
    this.$on('add', (v) => {
      this.$parent.$emit('add', v)
    })
    this.$on('remove', (v) => {
      this.$parent.$emit('remove', v)
    })
  },
  mounted () {

    // if (this.mat.audio) {
    //   setInterval(() => {
    //     if (this.mat.audio && this.mat.audio.uniforms.audioTexture) {
    //       this.mat.audio.uniforms.audioTexture.value = this.audioAPI.texture
    //     }
    //   }, 1000 / 60)
    // }

    this.execStack.push(() => {
      if (this.mat.audio && this.audioAPI) {
        this.mat.audio.uniforms.audioTexture.value = this.audioAPI.update().texture
        this.mat.audio.uniforms.time.value = window.performance.now() * 0.0001
      }
    })
  },
  methods: {
  }
}
</script>

<style>

</style>
