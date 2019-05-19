<template>
  <div class="full" v-if="refresher">
    <iframe v-if="isProd" class="full" :width="iframe.width" :height="iframe.height" frameborder="0" :srcdoc="srcdoc"></iframe>
    <DevExec v-else class="full" :nodes="nodes" ref="winwin"></DevExec>
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
  created () {
    this.$on('run', () => {
      this.refresher = false
      this.$forceUpdate()
      setTimeout(() => {
        this.refresher = true
        this.$forceUpdate()
      }, 15)
    })
  },
  components: {
    DevExec: () => import('./DevExec.vue')
  },
  watch: {
    nodes () {
      this.restartUI()
    }
  },
  data () {
    return {
      refresher: true,
      isProd: process.env.NODE_ENV === 'production',
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
      this.srcdoc = code
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
