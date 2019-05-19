<template>
  <div class="hidden">
    <slot></slot>
  </div>
</template>

<script>
import { SphereBufferGeometry } from 'three'
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
    let geo = new SphereBufferGeometry(this.size.x, 512, 512)
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
