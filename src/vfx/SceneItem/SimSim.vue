<template>
  <Object3D @element="(v) => { root = v; init() }">
    <!-- <Box :color="'#0ff0f0'"></Box> -->

    <!--
    <BoxBufferGeometry @geometry="(v) => { geo.box = v }"></BoxBufferGeometry>
    <SolidMaterial @material="(v) => { mat.solid = v }"></SolidMaterial>

    <Object3D v-if="geo.box && mat.solid">
      <Object3D :position="{ x: 0, y: 0, z: 0 }" :scale="{ x: 50, y: 50, z: 50 }">
        <Mesh :geo="geo.box" :mat="mat.solid"></Mesh>
      </Object3D>
      <Object3D :position="{ x: 0, y: 50, z: 0 }" :scale="{ x: 50, y: 50, z: 50 }">
        <Mesh :geo="geo.box" :mat="mat.solid"></Mesh>
      </Object3D>
      <Object3D :position="{ x: 0, y: 100, z: 0 }" :scale="{ x: 50, y: 50, z: 50 }">
        <Mesh :geo="geo.box" :mat="mat.solid"></Mesh>
      </Object3D>
    </Object3D> -->


  </Object3D>
</template>

<script>
import FreeJS from '../FreeJS'
import * as Viz from '../Simulation/GeoShader/visualiser/visualiser.js'
export default {
  props: {
    scene: {
      required: true
    },
    audio: {
      required: true
    },
    renderer: {
      required: true
    },
    exec: {
    }
  },
  components: {
    ...FreeJS
  },
  data () {
    return {
      api: false,
      cleaner () {}
    }
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
    if (this.exec) {
      let item = () => {
        this.api && this.api.render({})
      }
      this.exec.push(item)
      this.cleaner = () => {
        let idx = this.exec.indexOf(item)
        if (idx !== -1) {
          this.exec.splice(idx, 1)
        }
      }
    }
  },
  beforeDestroy () {
    this.cleaner()
  },
  methods: {
    init () {
      this.api = Viz.makeAPI({ renderer: this.renderer, scene: this.root, audio: this.audio })
    }
  }
}
</script>

<style>

</style>
