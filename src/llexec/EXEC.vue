<template>
  <div class="full">
    <iframe v-if="refresher && isProd" class="full" :width="iframe.width" ref="iframe" :height="iframe.height" frameborder="0" :src="src"></iframe>
    <DevExec v-else-if="refresher" class="full" :nodes="nodes" ref="devexec"></DevExec>
  </div>
</template>

<script>
import * as CodeGen from '../llexec/code-generator.js'
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
    this.$on('push', (v) => {
      this.pushData(v)
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
    // refresher () {
    //   if (this.refresher) {
    //     this.$nextTick(() => {

    //     })
    //   }
    // },
    // links () {
    //   this.reload()
    // },
    // activeNodes () {
    //   this.reload()
    // },
    // nodes () {
    //   this.reload()
    // }
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
  async mounted () {
    let dimension = () => {
      let rect = this.$el.getBoundingClientRect()
      this.iframe.width = rect.width.toFixed(0)
      this.iframe.height = rect.height.toFixed(0)
    }
    window.addEventListener('resize', dimension, false)
    dimension()

    await this.reload()
  },
  methods: {
    tryGet (fn = () => {}) {
      let insta = fn()
      if (insta) {
        return insta
      }
      return new Promise((resolve) => {
        let tt = setInterval(() => {
          let result = fn()
          if (result) {
            clearInterval(tt)
            resolve(result)
          }
        }, 0)
      })
    },
    async pushData (v) {
      let sender = await this.getSender()
      sender(v)
    },
    async getSender () {
      if (this.isProd) {
        let iframe = await this.tryGet(() => {
          return this.$refs['iframe']
        })
        return iframe.contentWindow.postMessage
      } else {
        let devexec = await this.tryGet(() => {
          return this.$refs['devexec']
        })
        return devexec.postMessage
      }
    },
    reload () {
      return new Promise((resolve) => {
        this.refresher = false
        this.$forceUpdate()
        setTimeout(() => {
          this.restartUI()
          this.refresher = true
          this.$forceUpdate()
          this.$nextTick(() => {
            resolve()
          })
        }, 5)
      })
    },
    restartUI () {
      let code = CodeGen.nodeToCode({ nodes: this.nodes })
      let url = CodeGen.codeToBlobURL({ code })
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
