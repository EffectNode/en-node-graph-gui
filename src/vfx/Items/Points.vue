<template>
  <div class="hidden"></div>
</template>
<script>
import { Points } from 'three'
export default {
  props: {
    geo: {},
    mat: {}
  },
  data () {
    return {
      drawable: false
    }
  },
  watch: {
    mat () {
      this.drawable.mat = this.mat
      this.drawable.needsUpdate = true
    },
    geo () {
      this.drawable.geo = this.geo
      this.drawable.needsUpdate = true
    }
  },
  mounted () {
    let geo = this.geo
    let mat = this.mat
    this.drawable = new Points(geo, mat)
    this.$parent.$emit('add', this.drawable)
  },
  beforeDestroy () {
    this.$parent.$emit('remove', this.drawable)
  }
}
</script>

<style scoped>
.hidden{
  display: none;
}
</style>
