<template>
  <Object3D :rotation="{ x: 0, y: 3.14 * 0.5, z: 0.0 }">
    <!-- <Box :color="'#0ff0f0'"></Box> -->

    <PlaneBufferGeometry :segment="{ x: 128, y: 128, z: 128 }" @geometry="(v) => { geo.plane = v }"></PlaneBufferGeometry>
    <BoxBufferGeometry @geometry="(v) => { geo.box = v }"></BoxBufferGeometry>
    <SphereBufferGeometry @geometry="(v) => { geo.sphere = v }"></SphereBufferGeometry>
    <!-- <SolidMaterial @material="(v) => { mat.solid = v }"></SolidMaterial> -->
    <AudioNormalMaterial @material="(v) => { mat.audio = v }"></AudioNormalMaterial>

    <Object3D v-if="geo.plane && mat.audio">
      <!-- <Object3D :position="{ x: 0, y: 0, z: 0 }" :scale="{ x: 50, y: 50, z: 50 }">
        <Mesh :geo="geo.sphere" :mat="mat.audio"></Mesh>
      </Object3D>
      <Object3D :position="{ x: 0, y: 50, z: 0 }" :scale="{ x: 50, y: 50, z: 50 }">
        <Mesh :geo="geo.sphere" :mat="mat.audio"></Mesh>
      </Object3D> -->

      <Object3D :rotation="{ x: Math.PI * -0.5, y: Math.PI * 0.5, z: 0 }" :position="{ x: 0, y: 0, z: 0 }" :scale="{ x: 50, y: 50, z: 50 }">
        <Mesh :geo="geo.plane" :mat="mat.audio"></Mesh>
      </Object3D>
    </Object3D>
  </Object3D>
</template>

<script>
// import Box from '../Items/Box.vue'
import BoxBufferGeometry from '../Geometry/BoxBufferGeometry.vue'
import SphereBufferGeometry from '../Geometry/SphereBufferGeometry.vue'
import PlaneBufferGeometry from '../Geometry/PlaneBufferGeometry.vue'
// import Mesh from '../Items/Mesh.vue'
import Mesh from '../Items/Mesh.vue'
// import SolidMaterial from '../Material/SolidMaterial.vue'
import AudioNormalMaterial from '../Material/AudioNormalMaterial.vue'
// import DevMaterial from '../Material/DevMaterial.vue'
import FreeJS from '../FreeJS'
// import { setInterval } from 'timers'

export default {
  props: {
    execStack: {},
    audioAPI: {}
  },
  components: {
    ...FreeJS,
    // DevMaterial,
    // SolidMaterial,
    AudioNormalMaterial,
    // Mesh,
    Mesh,
    BoxBufferGeometry,
    PlaneBufferGeometry,
    SphereBufferGeometry// ,
    // Box
  },
  data () {
    return {
      Math,
      geo: {
        box: false,
        plane: false,
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
