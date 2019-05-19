<template>
  <div>

  </div>
</template>

<script>
export default {
  props: {
    node: {},
    parentNode: {},
    isRootNode: {},

    nodes: {},
    components: {}
  },
  data () {
    return {
      camera: false
    }
  },
  methods: {
    init () {
      let fov = 75
      let aspect = 9 / 18
      let near = 0.1
      let far = 100000000

      this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far)

      this.$emit('ready', this)
    }
  },
  mounted () {
    this.init()
  },
  created () {
    this.$on('addToParent', ({ parent }) => {
      console.log(this.node.title, 'addToParent', parent.node.title)
    })
    this.$on('addChild', ({ child }) => {
      console.log(this.node.title, 'addChild', child.node.title)
    })
    this.$on('removeFromParent', ({ parent }) => {
      console.log(this.node.title, 'removeFromParent', parent.node.title)
    })
    this.$on('removeChild', ({ child }) => {
      console.log(this.node.title, 'removeChild', child.node.title)
    })
  },
  beforeDestory () {
    this.$emit('remove', this)
  }
}
</script>

<style>

</style>
