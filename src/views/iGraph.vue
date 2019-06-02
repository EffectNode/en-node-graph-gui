<template>
  <div class="igraph" :class="{ 'loading': loading && !modes.isEditor }">
    <div class="nodetree">
      <NodeTree @open="open" v-if="nodes" :show="show" @dropped="onReload({ timeout: 600 })" @view="(v) => { view = v }" @onNodeClick="onNodeClick" :nodes="dynamic(show, nodes)" class="full svg-box" ref="editor">
      </NodeTree>
    </div>

    <UIBtnTools :loading="loading" @login="onLogin" @codefork="onCodeFork" @codepen="onCodePen" @download="onDownload" :modes="modes" v-if="nodes" :open="open" :show="show" @show="show = $event" :nodes="nodes" @onChangeView="$emit('onChangeView', $event)" :node="node" ></UIBtnTools>

    <UIPreviewBox @addOnClose="(v) => { onCloseList.push(v) }" :order="order" :style="{ zIndex: order.indexOf('preview') + 20 }" :open="open" v-if="water && nodes.length > 0" @run="onReload({ timeout: 0 })">
      <EXEC ref="exec" mode="preview" :water="water"></EXEC>
    </UIPreviewBox>

    <UITimeline :order="order" :style="{ zIndex: 20 }" :open="open" v-if="water && !open.fullpreview" @close="open.timeline = false; $forceUpdate()">
      <UITimelineHolder v-if="nodes" :nodes="nodes" @reload="onReload({ timeout: 0 })" :timeline="water.timeline" :doSync="syncToFrame" :editor="water.timeinfo" :timeinfo="water.timeinfo"></UITimelineHolder>
    </UITimeline>

    <UIInspector :order="order" :style="{ zIndex: order.indexOf('inspector') + 20 }" :open="open" @close="onClose">
      <UIControls v-if="open.inspector && timeline"  @onNodeClick="onNodeClick" :timeline="water.timeline" @reload="onReload({ timeout: 0 })" @openCoder="openCoder" :nodes="nodes" @onLayout="$emit('onLayout', $event)" @close="onClose" :node="node" @nodes="nodes = $event" @show="show = $event"></UIControls>
    </UIInspector>

    <UICoder @addOnClose="(v) => { onCloseList.push(v) }" :order="order" :style="{ zIndex: order.indexOf('coder') + 20 }" :open="open" v-if="open.coder" @close="open.coder = false; $forceUpdate()">
      <UICodeControl @reload="onReload({ timeout: 0 })" :nodes="nodes" @onLayout="$emit('onLayout', $event)" @close="onCloseCoder" :node="node" @nodes="nodes = $event" @show="show = $event"></UICodeControl>
    </UICoder>

    <UIMediaBox @addOnClose="(v) => { onCloseList.push(v) }" :order="order" :style="{ zIndex: order.indexOf('mediabox') + 20 }" :open="open" v-if="open.mediabox" @close="open.mediabox = false; $forceUpdate()">
    </UIMediaBox>

  </div>
</template>

<script>
// import NProgress from 'nprogress'
import(/* webpackChunkName: "igraph-coder" */'../llui/UICodeControl.vue')
export default {
  props: {
    modes: {
      default () {
        return {}
      }
    },
    initWater: {}
  },
  name: 'igraph',
  components: {
    // Brace
    UICodeControl: () => import(/* webpackChunkName: "igraph-coder" */'../llui/UICodeControl.vue'),

    // EXEC
    EXEC: () => import(/* webpackChunkName: "igraph-core" */'../llexec/EXEC.vue'),
    NodeTree: () => import(/* webpackChunkName: "igraph-core" */'../llsvg/NodeTree.vue'),
    UIControls: () => import(/* webpackChunkName: "igraph-core" */'../llui/UIControls.vue'),
    UITimelineHolder: () => import(/* webpackChunkName: "igraph-core" */'../lltimeline/timeline-holder.vue'),

    // UIBOX
    UICoder: () => import(/* webpackChunkName: "igraph" */'../llui/UICoder.vue'),
    UIPreviewBox: () => import(/* webpackChunkName: "igraph" */'../llui/UIPreviewBox.vue'),
    UIMediaBox: () => import(/* webpackChunkName: "igraph" */'../llui/UIMediaBox.vue'),
    UIInspector: () => import(/* webpackChunkName: "igraph" */'../llui/UIInspector.vue'),
    UITimeline: () => import(/* webpackChunkName: "igraph" */'../llui/UITimeline.vue'),
    UIBtnTools: () => import(/* webpackChunkName: "igraph" */'../llui/UIBtnTools.vue')
  },
  data () {
    return {
      loading: true,

      onCloseList: [],
      clearTimer: 0,
      order: [
        'coder',
        'timeline',
        'inspector',
        'preview'
      ],
      show: 'normal',
      open: {
        mediabox: false,
        fullpreview: false,
        coder: false,
        timeline: true,
        inspector: false
      },

      getTime (start) {
        let now = window.performance.now() * 0.001
        return now - start
      },
      water: false,
      view: {
        x: 0,
        y: 0
      },
      node: false

      // nodes: false
    }
  },
  computed: {
    nodes: {
      get () {
        if (!this.water) {
          return
        }
        return this.water.nodes
      },
      set (v) {
        this.water.nodes = v
      }
    },
    timeline: {
      get () {
        if (!this.water) {
          return
        }
        return this.water.timeline
      },
      set (v) {
        this.water.timeline = v
      }
    },
    timeinfo: {
      get () {
        if (!this.water) {
          return
        }
        return this.water.timeinfo
      },
      set (v) {
        this.water.timeinfo = v
      }
    }
  },
  watch: {
    // order () {
    //   window.dispatchEvent(new Event('resize'))
    //   setTimeout(() => {
    //     window.dispatchEvent(new Event('resize'))
    //     setTimeout(() => {
    //       window.dispatchEvent(new Event('resize'))
    //     })
    //   })
    // }
  },
  mounted () {
    window.addEventListener('keydown', (evt) => {
      if (evt.keyCode + '' === '27') {
        let latestOnClose = this.onCloseList.pop()
        if (latestOnClose) {
          latestOnClose()
        }
      }
    })
    window.addEventListener('message', (evt) => {
      if (evt.origin === window.location.origin) {
        let signal = evt.data
        let type = signal.type
        if (type === 'escape') {
          let latestOnClose = this.onCloseList.pop()
          if (latestOnClose) {
            latestOnClose()
          }
        }
      }
    })

    window.getNODES = () => {
      return this.nodes
    }
    window.getWater = () => {
      return this.getWater()
    }
    window.zip = ({ obj }) => {
      return this.zip({ obj })
    }
    window.unzip = ({ gzip }) => {
      return this.unzip({ gzip })
    }

    console.log(`copy(window.getNODES())`)
    console.log(`copy(encodeURIComponent(JSON.stringify(getNODES())))`)
    console.log(`copy(window.getWater())`)
    console.log(`copy(encodeURIComponent(JSON.stringify(getWater())))`)
    console.log(`copy(await window.zip({ obj: getWater() }))`)
    console.log(`copy(await window.unzip({ gzip: 'gzipstring' }))`)

    this.water = JSON.parse(JSON.stringify(this.initWater))
    // always reset timelinfo
    this.water.timeinfo = {
      ...this.water.timeinfo,
      start: window.performance.now() * 0.001,
      // totalTime: 30,
      loop: true,
      elapsed: 0,
      timelinePlaying: true,
      timelineControl: 'timer',
      timelinePercentageLast: 0,
      timelinePercentage: 0 // can be timeline, render or play
    }

    if (this.modes.isEditor) {
      let water1 = JSON.stringify(this.getWater())
      this.autoChecker = setInterval(() => {
        let water2 = JSON.stringify(this.getWater())
        if (water2 !== water1) {
          // NProgress.start()
          // this.loading = true
          // this.$refs.igraph.classList.add('loading')
          this.$emit('save', {
            obj: this.getWater(),
            done: () => {
              // NProgress.done()
              // this.$refs.igraph.classList.remove('loading')
              // this.loading = false
            }
          })
          water1 = water2
        }
      }, 1500)
    }

    window.addEventListener('message', (evt) => {
      let obj = evt.data
      let type = obj.type
      if (type === 'all-ready') {
        console.log('all-ready')
        setTimeout(() => {
          this.water.timeinfo.start = window.performance.now() * 0.001
          this.water.timeinfo.timelinePlaying = true
          this.loading = false
        }, 10)
      }
    }, false)

    let rAF2 = () => {
      this.clearTimer = requestAnimationFrame(rAF2)
      if (this.water.timeinfo.timelineControl === 'timer' && this.water.timeinfo.timelinePlaying) {
        let totalTime = this.water.timeline.totalTime
        this.water.timeinfo.timelinePercentageLast = this.getTime(this.water.timeinfo.start) / totalTime
        let lastTime = this.water.timeinfo.timelinePercentageLast * totalTime
        this.water.timeinfo.timelinePercentage = lastTime / totalTime
        if (this.water.timeinfo.loop) {
          this.water.timeinfo.elapsed = this.getTime(this.water.timeinfo.start) % this.water.timeinfo.totalTime
          this.water.timeinfo.timelinePercentage %= 1
        } else {
          this.water.timeinfo.elapsed = this.getTime(this.water.timeinfo.start)
        }
        this.syncToFrame()
      }
    }

    this.clearTimer = requestAnimationFrame(rAF2)
    this.syncToFrame()
  },
  created () {
    this.$on('onLayout', ({ node, nodes, args = {} }) => {
      nodes.forEach((node) => {
        node.pos.x += 0.00001
        node.pos.y += 0.00001
      })
      this.$refs.editor.$emit('do', {
        action: 'cleanLayout',
        args: {
          instant: true,
          goHome: false,
          resetZoom: false,
          ...args
        }
      })
    })
  },
  beforeDestroy () {
    clearInterval(this.autoChecker)
    clearInterval(this.autoSaveTimer)
    cancelAnimationFrame(this.clearTimer)
  },
  methods: {
    onLogin () {
      this.$router.push({
        path: '/login',
        query: {
          redirect: this.$route.path
        }
      })
    },
    async onDownload () {
      /* eslint-disable */
      let download = await import(/* webpackChunkName: "igraph-export" */'raw-loader!../fragments/download.fragment.html')
      /* eslint-enable */
      let str = download.default
      let replaceTokenGZIPB64 = `/*gZipBase64*/`
      str = str.replace(replaceTokenGZIPB64, await this.zip({ obj: this.getWater() }))

      let anchor = document.createElement('a')
      anchor.target = '_blank'
      anchor.href = `data:text/html;charset=utf-8,${encodeURIComponent(str)}`
      anchor.download = 'My Demo.html'
      anchor.click()
    },
    async onCodePen () {
      /* eslint-disable */
      let download = await import(/* webpackChunkName: "igraph-export" */'raw-loader!../fragments/download.fragment.html')
      /* eslint-enable */
      let str = download.default
      let replaceTokenGZIPB64 = `/*gZipBase64*/`
      str = str.replace(replaceTokenGZIPB64, await this.zip({ obj: this.getWater() }))

      let newWin = window.open()
      let document = newWin.document
      // if (window.top) {
      //   document = window.top.document
      // }

      let form = document.createElement('form')
      form.action = `https://codepen.io/pen/define`
      form.method = 'POST'
      form.style.display = 'none'

      document.body.appendChild(form)

      let input = document.createElement('input')
      input.type = 'text'
      input.name = 'data'
      input.value = JSON.stringify({
        html: str,
        css: '',
        js: ''
      })
      form.appendChild(input)
      form.submit()

      // let anchor = document.createElement('a')
      // anchor.target = '_blank'
      // anchor.href = `data:text/html;charset=utf-8,${encodeURIComponent(str)}`
      // anchor.download = 'My Demo.html'
      // anchor.click()
    },
    getWater () {
      let newwater = JSON.parse(JSON.stringify(this.water))
      newwater.timeinfo.start = 0
      newwater.timeinfo.timelinePlaying = true
      newwater.timeinfo.timelineControl = 'timer'
      newwater.timeinfo.timelinePercentageLast = 0
      newwater.timeinfo.timelinePercentage = 0
      newwater.timeinfo.elapsed = 0

      newwater.nodes.forEach((node) => {
        node.confirmRecylce = false
        node.hasFound = false
        node.isActive = false
        node.isOverlapping = false
        node.isOverlappingWith = false
        delete node.rect
      })

      return newwater
    },
    async zip ({ obj }) {
      let pako = await import('pako')
      var binaryString = pako.deflate(JSON.stringify(obj), { to: 'string' })
      var base64 = btoa(binaryString)
      return base64
    },
    async unzip ({ gzip }) {
      let pako = await import('pako')
      gzip = atob(gzip)
      var restored = JSON.parse(pako.inflate(gzip, { to: 'string' }))
      return restored
    },
    sendTop (v) {
      this.order.splice(this.order.indexOf(v), 1)
      this.order.push(v)
    },
    syncToFrame () {
      window.dispatchEvent(new CustomEvent('sync-all', {
        detail: {
          timeinfo: this.water.timeinfo,
          timeline: this.water.timeline
        }
      }))
    },
    openCoder () {
      this.open.coder = true
      this.$forceUpdate()
    },
    onReload ({ timeout } = {}) {
      setTimeout(() => {
        this.$refs.exec.$emit('reload')
      }, timeout || 0)
    },
    onClose () {
      this.open.inspector = false
      this.$nextTick(() => {
        this.open.coder = false
        this.$forceUpdate()
      })
      this.$forceUpdate()
    },
    onCloseCoder () {
      this.open.coder = false
    },
    dynamic (show, nodes) {
      let h = {}
      h.normal = (nodes) => {
        return nodes
          .filter(n => !n.trashed)
          .filter(n => !n.hidden)
      }
      h.trashed = (nodes) => {
        return nodes
          .filter(n => n.trashed)
      }
      return h[show](nodes)
    },

    onNodeClick ({ node, nodes }) {
      // console.log(node, nodes)
      this.node = node
      this.open.inspector = true
      this.sendTop('coder')
      this.sendTop('inspector')
    },
    onCodeFork () {
      this.$emit('codefork', {
        water: this.getWater()
      })
    }
  }
}
</script>

<style lang="css" scoped>
@keyframes bgMove {
  0%{
    background-position-x: 0%;
  }
  100%{
    background-position-x: 400%;
  }
}
.igraph.loading{
  background-image: linear-gradient(90deg, #212121, #474747, #212121);
  background-size: 400% 400%;
  animation: bgMove 3.5s linear 0s infinite reverse both;
}

.igraph{
  background-color: #212121;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.nodetree{
  width: 100%;
  height: 60%;
}
@media screen and (min-width: 767px) {
  .nodetree{
    width: calc(100% - 320px);
    height: calc(100% - 250px);
  }
}

</style>
