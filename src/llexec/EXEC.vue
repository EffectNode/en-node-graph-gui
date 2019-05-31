<template>
  <div class="full">
    <iframe v-if="refresher" class="full" :width="iframe.width" ref="iframe" :height="iframe.height" frameborder="0" :src="src"></iframe>
    <!-- <DevExec v-else-if="refresher" class="full" :nodes="nodes" ref="devexec"></DevExec> -->
  </div>
</template>

<script>
import * as CodeGen from '../llexec/code-generator.js'
import * as Node from '../llsvg/node'
export default {
  props: {
    // playing: {
    //   default: false
    // },
    mode: {
      default: 'preview'
    },
    water: {
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
    // DevExec: () => import('./DevExec.vue')
  },
  computed: {
    // nodes: {
    //   get () {
    //     return this.water.nodes
    //   },
    //   set (v) {
    //     this.water.nodes = v
    //     return v
    //   }
    // },
    // timeinfo: {
    //   get () {
    //     return this.water.timeinfo
    //   },
    //   set (v) {
    //     this.water.timeinfo = v
    //     return v
    //   }
    // },
    // timeline: {
    //   get () {
    //     return this.water.timeline
    //   },
    //   set (v) {
    //     this.water.timeline = v
    //     return v
    //   }
    // },
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
    // playing () {
    //   if (this.playing) {
    //     this.play()
    //   } else {
    //     this.pause()
    //   }
    // }
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
      // isProd: process.env.NODE_ENV === 'production',

      iframe: {
        width: 1,
        height: 1
      },
      src: 'about:blank'
    }
  },
  async mounted () {
    window.addEventListener('reload', (evt) => {
      this.refresher = false
      this.$nextTick(() => {
        this.refresher = true
      })
    }, false)

    window.addEventListener('sync-all', (evt) => {
      if (evt.type === 'sync-all') {
        let iframe = this.$refs['iframe']
        if (iframe) {
          let toSend = JSON.parse(JSON.stringify(evt.detail))
          // console.log(toSend)
          delete toSend.nodes
          // REMOVE NODES
          iframe.contentWindow.postMessage({ type: evt.type, data: toSend }, window.location.origin)
        }
      }
    }, false)

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
    // pause () {
    //   let iframe = this.$refs['iframe']
    //   if (iframe) {
    //     iframe.contentWindow.postMessage({ type: 'pause' }, window.location.origin)
    //   }
    // },
    // play () {
    //   let iframe = this.$refs['iframe']
    //   if (iframe) {
    //     iframe.contentWindow.postMessage({ type: 'play' }, window.location.origin)
    //   }
    // },
    // tryGet (fn = () => {}) {
    //   let insta = fn()
    //   if (insta) {
    //     return Promise.resolve(insta)
    //   }
    //   return new Promise((resolve) => {
    //     let tt = setInterval(() => {
    //       let result = fn()
    //       if (result) {
    //         clearInterval(tt)
    //         resolve(result)
    //       }
    //     }, 0)
    //   })
    // },
    // async pushData (v) {
    //   let sender = await this.getSender()
    //   sender(v)
    // },
    // async getSender () {
    //   let iframe = await this.tryGet(() => {
    //     return this.$refs['iframe']
    //   })
    //   return iframe.contentWindow.postMessage
    // },
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
      let code = CodeGen.generate({ water: this.water })
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
