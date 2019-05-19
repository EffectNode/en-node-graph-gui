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
      let geo = new THREE.BoxBufferGeometry(20, 20, 20, 20);
      let mat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      this.drawable = new THREE.Mesh(geo, mat)
    }
  },
  mounted () {
    this.init()
    this.$emit('ready', this)
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
