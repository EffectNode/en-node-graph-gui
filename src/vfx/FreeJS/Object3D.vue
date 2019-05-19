<template>
  <span class="hidden">
    <slot></slot>
  </span>
</template>

<script>
import { Object3D } from 'three'
export default {
  props: {
    position: {},
    scale: {},
    quaternion: {},
    rotation: {},
    physics: {},
    visible: {
      default: true
    }
  },
  watch: {
    visible () {
      this.obj3D.visible = this.visible
    },
    scale: {
      deep: true,
      handler (v) {
        if (!v) {
          return
        }
        this.obj3D.scale.x = v.x
        this.obj3D.scale.y = v.y
        this.obj3D.scale.z = v.z
      }
    },
    position: {
      deep: true,
      handler (v) {
        if (!v) {
          return
        }
        this.obj3D.position.copy(v)
      }
    },
    rotation: {
      deep: true,
      handler (v) {
        if (!v) {
          return
        }
        this.obj3D.rotation.x = v.x
        this.obj3D.rotation.y = v.y
        this.obj3D.rotation.z = v.z
      }
    },
    quaternion: {
      deep: true,
      handler (v) {
        if (!v) {
          return
        }
        this.obj3D.quaternion.copy(v)
      }
    }
  },
  data () {
    return {
      obj3D: new Object3D()
    }
  },
  created () {
    this.$on('add', (object) => {
      this.obj3D.add(object)
    })
    this.$on('remove', (object) => {
      this.obj3D.remove(object)
    })
  },
  mounted () {
    this.scale && this.obj3D.scale.copy(this.scale)
    this.position && this.obj3D.position.copy(this.position)
    // this.rotation && this.obj3D.rotation.copy(this.rotation)
    if (this.rotation) {
      this.obj3D.rotation.x = this.rotation.x
      this.obj3D.rotation.y = this.rotation.y
      this.obj3D.rotation.z = this.rotation.z
    }
    this.obj3D.visible = this.visible
    this.quaternion && this.obj3D.quaternion.copy(this.quaternion)

    this.$emit('element', this.obj3D)
    this.$parent.$emit('add', this.obj3D)
  },
  beforeDestroy () {
    // this.obj3D.dispose()
    this.$emit('remove', this.obj3D)
    this.$parent.$emit('remove', this.obj3D)
  }
}
</script>

<style scpoed>
.hidden{
  display: none;
}
</style>
