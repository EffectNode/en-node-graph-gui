<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { Scene } from 'three'
export default {
  data () {
    return {
      scene: new Scene()
    }
  },
  created () {
    this.$on('add', (object) => {
      this.scene.add(object)
    })
    this.$on('remove', (object) => {
      this.scene.remove(object)
    })
  },
  mounted () {
    this.$emit('ready', this.scene)
  }
}
</script>

<style scpoed>
.hidden{
  display: none;
}
</style>
