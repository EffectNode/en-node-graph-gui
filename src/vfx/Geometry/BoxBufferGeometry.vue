<template>
  <div class="hidden">
    <slot></slot>
  </div>
</template>

<script>
import { BoxBufferGeometry } from 'three'
export default {
  props: {
    size: {
      default () {
        return { x: 1.0, y: 1.0, z: 1.0 }
      }
    }
  },
  data () {
    return {
      geometry: false
    }
  },
  mounted () {
    let geo = new BoxBufferGeometry(this.size.x, this.size.y, this.size.z, 128.0, 128.0, 128.0)
    this.geometry = geo
    this.$emit('geometry', geo)
  },
  beforeDestroy () {
    this.$emit('geometry', false)
    this.geometry.dispose()
  }
}
</script>

<style scoped>
.hidden{
  display: none;
}
</style>
