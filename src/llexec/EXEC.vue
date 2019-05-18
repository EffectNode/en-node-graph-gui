<template>
  <div class="full">
    <iframe class="full" :width="iframe.width" :height="iframe.height" frameborder="0" :src="src"></iframe>
  </div>
</template>

<script>
import * as ENV from '../llexec/engine.js'
export default {
  props: {
    mode: {
      default: 'preview'
    },
    nodes: {
      default () {
        return []
      }
    }
  },
  components: {

  },
  watch: {
    nodes () {
      this.restartUI()
    }
  },
  data () {
    return {
      iframe: {
        width: 1,
        height: 1
      },
      srcdoc: '',
      src: 'about:blank'
    }
  },
  mounted () {
    let dimension = () => {
      let rect = this.$el.getBoundingClientRect()
      this.iframe.width = rect.width.toFixed(0)
      this.iframe.height = (rect.height).toFixed(0)
    }
    window.addEventListener('resize', dimension, false)
    dimension()

    this.restartUI()
  },
  methods: {
    restartUI () {
      let code = ENV.nodeToCode({ nodes: this.nodes })
      this.src = ENV.codeToBlobURL({ code })
    }
  }
}
</script>

<style scoped>
.full{
  width: 100%;
  height: 100%
}
</style>
