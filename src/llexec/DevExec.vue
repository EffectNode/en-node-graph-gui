<template>
  <div class="full">
    <SandBox v-if="water" :water="water"></SandBox>
  </div>
</template>

<script>
import SandBox from './SandBox.vue'

export default {
  props: {
    nodes: {}
  },
  components: {
    SandBox
  },
  data () {
    return {
      water: {
        nodes: this.nodes
      }
    }
  },
  methods: {
    postMessage (evt) {
      console.log(evt)
      if (this.$refs.sandbox) {
      }
    }
  },
  watch: {
    nodes () {
      this.water.nodes = this.nodes
    }
  }
}
</script>

<style>

</style>
