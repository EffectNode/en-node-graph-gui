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
  watch: {
    nodes () {
      this.water.nodes = this.nodes
    }
  }
}
</script>

<style>

</style>
