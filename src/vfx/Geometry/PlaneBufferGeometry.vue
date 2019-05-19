<template>
  <div class="hidden">
    <slot></slot>
  </div>
</template>

<script>
import { PlaneBufferGeometry } from 'three'
export default {
  props: {
    size: {
      default () {
        return { x: 1.0, y: 1.0, z: 1.0 }
      }
    },
    segment: {
      default () {
        return { x: 2, y: 2, z: 2 }
      }
    }
  },
  data () {
    return {
      geometry: false
    }
  },
  mounted () {
    let geo = new PlaneBufferGeometry(this.size.x, this.size.y, this.segment.x, this.segment.y)
    this.geometry = geo
    this.$emit('geometry', geo)
  },
  beforeDestroy () {
    this.$emit('geometry', false)
  }
}
</script>

<style scoped>
.hidden{
  display: none;
}
</style>
