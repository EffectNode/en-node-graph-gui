<template>
  <Object3D @element="(v) => { root = v; init() }">
  </Object3D>
</template>

<script>
import FreeJS from '../FreeJS'
import * as Viz from '../Simulation/GeoShader/vertexer/vertexer.js'
export default {
  props: {
    scene: {
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
      let fnc = ({ mouse, rect }) => {
        if (this.api) {
          this.api.render({})
          this.api.setMouse({ mX: mouse.x, mY: mouse.y, rect: rect })
        }
      }
      this.exec.push(fnc)
      this.cleaner = () => {
        let idx = this.exec.indexOf(fnc)
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
      this.api = Viz.makeAPI({ renderer: this.renderer, scene: this.root })
    }
  }
}
</script>

<style>

</style>
