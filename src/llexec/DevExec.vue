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
    async postMessage (evt) {
      window.postMessage(evt, window.location.origin)
    },
    tryGet (fn = () => {}) {
      return new Promise((resolve) => {
        let tt = setInterval(() => {
          let result = fn()
          if (result) {
            clearInterval(tt)
            resolve(result)
          }
        }, 0)
      })
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
