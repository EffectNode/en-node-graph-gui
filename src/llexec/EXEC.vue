<template>
  <div class="full" v-if="refresher">
    <iframe v-if="true" class="full" :width="iframe.width" ref="winwin" :height="iframe.height" frameborder="0" :src="src"></iframe>
    <DevExec v-else class="full" :nodes="nodes" ref="winwin"></DevExec>
  </div>
</template>

<script>
import * as ENV from '../llexec/engine.js'
import * as Node from '../llsvg/node'
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
    this.$on('reload', () => {
      this.reload()
    })
  },
  components: {
    DevExec: () => import('./DevExec.vue')
  },
  computed: {
    activeNodes () {
      return (this.nodes || []).filter(n => {
        return !n.trashed
      })
    },
    links () {
      return (Node.getLinks({ nodes: this.nodes }))
    }
  },
  watch: {
    links () {
      this.reload()
    },
    activeNodes () {
      this.reload()
    },
    nodes () {
      this.reload()
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

    this.reload()
    this.sendData({ nodes: this.nodes })
  },
  methods: {
    sendData ({ nodes }) {
      let item = this.$refs['winwin'].contentWindow
      console.log(item)
    },
    reload () {
      this.refresher = false
      this.$forceUpdate()
      setTimeout(() => {
        this.restartUI()
        this.refresher = true
        this.$forceUpdate()
      }, 15)
    },
    restartUI () {
      let code = ENV.nodeToCode({ nodes: this.nodes })
      let url = ENV.codeToBlobURL({ code })
      this.src = url
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
