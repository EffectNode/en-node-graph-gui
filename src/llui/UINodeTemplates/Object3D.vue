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
      object3D: false
    }
  },
  mounted () {
    this.init()
    this.$emit('ready', this)
  },
  methods: {
    init () {
      this.object3D = new THREE.Object3D()
    }
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
