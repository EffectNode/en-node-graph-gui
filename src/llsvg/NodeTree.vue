<template>
  <div class="full">
    <!-- preserveAspectRatio="preserveAspectRatio" -->
    <svg ref="svg" class="svgnodetree" :height="win.height" :width="win.width" :viewBox="viewBox">
      <defs>
        <radialGradient :id="`${uniq}rainbow-gradient`" cx="50%" cy="50%" fx="50%" fy="50%" r="100%">
            <stop stop-color="#00ffff" offset="0%">
            </stop>
            <stop stop-color="#ff00ff" offset="100%">
            </stop>
        </radialGradient>

        <linearGradient x1="100%" y1="49.9999994%" x2="0%" y2="50%" :id="`${uniq}rainbow-gradient-path`">
            <stop stop-color="#FF00FF" offset="0%"></stop>
            <stop stop-color="#00FFFF" offset="50%"></stop>
            <stop stop-color="#FF00FF" offset="100%"></stop>
        </linearGradient>

        <radialGradient :id="`${uniq}rainbow-gradient-movin`" cx="50%" cy="50%" fx="50%" fy="50%" r="100%">
            <stop stop-color="#00E0FF" offset="0%">
              <animate attributeName="stop-color" values="#00E0FF; #ff00ff; #00E0FF;" dur="2s" repeatCount="indefinite"></animate>
`          </stop>
            <stop stop-color="#ff00ff" offset="50%">
              <animate attributeName="stop-color" values="#ff00ff; #00E0FF; #ff00ff;" dur="2s" repeatCount="indefinite"></animate>
            </stop>
            <stop stop-color="#00E0FF" offset="100%">
              <animate attributeName="stop-color" values="#00E0FF; #ff00ff; #00E0FF;" dur="2s" repeatCount="indefinite"></animate>
            </stop>
        </radialGradient>

        <radialGradient :id="`${uniq}hover-gradient-movin`" cx="50%" cy="50%" fx="50%" fy="50%" r="100%">
            <stop stop-color="#ffff00" offset="0%">
              <animate attributeName="stop-color" values="#ffff00; #0000ff; #ffff00;" dur="2s" repeatCount="indefinite"></animate>
`          </stop>
            <stop stop-color="#0000ff" offset="50%">
              <animate attributeName="stop-color" values="#0000ff; #ffff00; #0000ff;" dur="2s" repeatCount="indefinite"></animate>
            </stop>
            <stop stop-color="#ffff00" offset="100%">
              <animate attributeName="stop-color" values="#ffff00; #0000ff; #ffff00;" dur="2s" repeatCount="indefinite"></animate>
            </stop>
        </radialGradient>

        <marker :id="`${uniq}circle-ok`" style="overflow:visible; cursor: pointer;">
          <circle r="3" :fill="'lime'" />
        </marker>
        <marker :id="`${uniq}circle-ready`" style="overflow:visible; cursor: pointer;">
          <!-- <circle r="3" :fill="`url(#${uniq}kale-salad)`" /> -->
          <circle r="3" :stroke="`#transparent`" :fill="`transparent`" />
        </marker>
          <marker :id="`${uniq}circle-error`" style="overflow:visible; cursor: pointer;">
          <circle r="3" :fill="'red'" />
        </marker>
          <marker :id="`${uniq}circle-info`" style="overflow:visible; cursor: pointer;">
          <circle r="3" :fill="'blue'" />
        </marker>

        <linearGradient :id="`${uniq}kale-salad`" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#00C9FF;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#92FE9D;stop-opacity:1" />
        </linearGradient>

        <linearGradient :id="`${uniq}disco-club`" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#FC466B;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#3F5EFB;stop-opacity:1" />
        </linearGradient>

        <linearGradient :id="`${uniq}danger`" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#FF0000;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#FFFFFF;stop-opacity:1" />
        </linearGradient>

        <linearGradient :id="`${uniq}calm-blue`" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#52ACFF;stop-opacity:1" />
          <stop offset="25%" style="stop-color:#52ACFF;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#FFE32C;stop-opacity:1" />
        </linearGradient>

        <linearGradient :id="`${uniq}calm-pink`" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#FAACA8;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#DDD6F3;stop-opacity:1" />
        </linearGradient>

      </defs>

      <ScreenPanner :zoom="zoom" :view="view" @move="onMove" :win="win"></ScreenPanner>

      <!-- Move the scene -->
      <g :style="mover">

        <g :key="node._id + node.to + ii" v-for="(node, ii) in nodes" x>
          <Node @dropped="$emit('dropped')" :node="node" :nodes="nodes" :title="node.title" :isRoot="node.to === null" :ref="`_node_${node._id}`" @click="onClick({ node, nodes, ...$event })" :uniq="uniq" :isActive="node.isActive" @move="(ev) => { onModeNodes(ev, node, nodes) }" :pos="node.pos" :type="'circle'"></Node>
        </g>

        <g :key="link.from + link.to + ii" v-for="(link, ii) in links">
          <NodePath :open="open" :link="link" :uniq="uniq"></NodePath>
        </g>

      </g>

    </svg>
  </div>
</template>

<script>
import TWEEN from '@tweenjs/tween.js'
import { setTimeout, clearTimeout } from 'timers'
import * as Node from './node.js'
// import { Promise } from 'q';

var dagre = require('dagre')
export default {
  props: {
    open: {},
    show: {
      default: 'normal'
    },
    nodes: {
      required: true
    },
    size: {
      default: false
    }
  },
  components: {
    Node: require('./Node.vue').default,
    NodePath: require('./NodePath.vue').default,
    // NodeButton: require('./NodeButton.vue').default,
    // LLPath: require('./LLPath.vue').default,
    ScreenPanner: require('./ScreenPanner.vue').default
  },
  data () {
    let view = {
      x: 0,
      y: 0,
      z: 0
    }
    return {
      links: [],
      uniq: `u_${Number(Math.random() * 1000000).toFixed(0)}`,
      mover: {
      },

      // xMinYMax slice
      // xMinYMid slice
      // preserveAspectRatio: `xMinYMax slice`,
      zoom: 0.5,
      viewBox: `0 0 500 500`,
      view,
      rect: {
        width: 500,
        height: 500,
        top: 0,
        left: 0
      },
      win: {
        width: 500,
        height: 500
      }
    }
  },
  created () {
    this.$on('do', (evt) => {
      this[evt.action](evt.args)
    })
  },
  mounted () {
    let resizer = () => {
      if (this.size) {
        this.win.width = this.size.width
        this.win.height = this.size.height
      }
      this.rect = this.$el.getBoundingClientRect()
      this.win = {
        width: this.rect.width,
        height: this.rect.height
      }
      this.computeLayout()
      this.$forceUpdate()
      this.okay = true
    }
    window.addEventListener('resize', resizer)
    resizer()

    this.init()
    this.onInit()

    // let self = this
    function animate (time) {
      requestAnimationFrame(animate)
      TWEEN.update(time)
    }
    requestAnimationFrame(animate)
  },
  watch: {
    open: {
      deep: true,
      handler () {
        if (this.open.coder || this.open.inspector) {
          this.links.forEach((link) => {
            link.running = false
            link.dashed = false
          })
        } else {
          this.links.forEach((link) => {
            link.running = true
            link.dashed = true
          })
        }
      }
    },
    view: {
      deep: true,
      handler () {
        this.computeLayout()
      }
    },
    show () {
      this.onInit()
    },
    nodes () {
      this.onInit()
    }
  },
  methods: {
    onInit () {
      this.computeLayout()
      this.nodes.forEach(n => {
        n.pos = n.pos || { x: 0, y: 0 }
        n.pos.x += 0.01
        n.pos.y += 0.01
        n.size = n.size || { width: 60, height: 60 }
        n.size.width = 60
        n.size.height = 60
        n.isOverlapping = false
        n.isOverlappingWith = false
      })
      this.cleanLayout({ instant: true, goHome: false, resetZoom: true })
      this.$forceUpdate()
    },
    onClick ({ node, nodes, rect }) {
      nodes.forEach(m => {
        m.isActive = false
      })
      node.isActive = true
      node.rect = rect
      this.$forceUpdate()

      this.panToCenter({ rect })
      this.$emit('onNodeClick', { node, nodes })
    },
    panToCenter ({ rect }) {
      let view2 = {}
      view2.x = this.view.x - rect.left
      view2.y = this.view.y - rect.top

      view2.x += (window.innerWidth - 250) / 2
      view2.y += (window.innerHeight - 250) / 2

      // view2.x += rect.left * 0.5
      // view2.y += rect.top * 0.5

      // if (rect.width > 767) {
      //   view2.x += (rect.width) * 0.5
      //   view2.y += rect.height * 0.35
      // } else {
      //   view2.x += (rect.width) * 0.5
      //   view2.y += rect.height * 0.25
      // }

      // this.computeLayout()
      // this.$forceUpdate()

      return new Promise((resolve) => {
        let tt = new TWEEN.Tween(this.view) // Create a new tween that modifies 'coords'.
          .to(view2, 250) // Move to (300, 200) in 1 second.
          .easing(TWEEN.Easing.Circular.Out) // Use an easing function to make the animation smooth.
          .onUpdate(() => { // Called after tween.js updates 'coords'.
            // Move 'box' to the position described by 'coords' with a CSS translation.
            this.computeLayout()
          })
          .onComplete(() => {
            resolve()
          })
        setTimeout(() => {
          tt.start()
        }, 10)
      })
    },
    init () {
      // this.computeLayout()
      // this.nodes.forEach(n => {
      //   n.pos = n.pos || {}
      //   n.pos.x = 0
      //   n.pos.y = 0
      //   n.size = n.size || {}
      //   n.size.width = 60
      //   n.size.height = 60
      // })
      // this.cleanLayout({ instant: true, goHome: false, resetZoom: false })
      // this.$forceUpdate()
    },
    async cleanLayout ({ instant, goHome, resetZoom, goNode } = {}) {
      TWEEN.removeAll()

      let g = new dagre.graphlib.Graph()
      /* eslint-disable */
      // Set an object for the graph label
      g.setGraph({
        marginx: 50,
        marginy: 50,
        // working
        // rankdir: 'BT',
        nodesep: 50,
        ranksep: 120,
        rankdir: 'RL',
        // https://github.com/dagrejs/dagre/wiki#using-dagre
        // align: 'DL'
      });

      // Default to assigning a new object as a label for each new edge.
      g.setDefaultEdgeLabel(function() { return {}; });

      // Add nodes to the graph. The first argument is the node id. The second is
      // metadata about the node. In this case we're going to add labels to each of
      // our nodes.

      this.nodes.forEach((node) => {
        g.setNode(node._id, { label: node._id, x: 0, y: 0, width: node.size.width, height: node.size.height });
      })

      this.links = this.getLinks(this.nodes)
      this.links.forEach((link) => {
        g.setEdge(link.from, link.to);
      })

      // g.setNode("swilliams",  { label: "Saul Williams", width: 160, height: 100 });
      // g.setNode("bpitt",      { label: "Brad Pitt",     width: 108, height: 100 });
      // g.setNode("hford",      { label: "Harrison Ford", width: 168, height: 100 });
      // g.setNode("lwilson",    { label: "Luke Wilson",   width: 144, height: 100 });
      // g.setNode("kbacon",     { label: "Kevin Bacon",   width: 121, height: 100 });

      // // Add edges to the graph.
      // g.setEdge("kspacey",   "swilliams");
      // g.setEdge("swilliams", "kbacon");
      // g.setEdge("bpitt",     "kbacon");
      // g.setEdge("hford",     "lwilson");
      // g.setEdge("lwilson",   "kbacon");

      dagre.layout(g);
      let nodeMap = {}
      this.nodes.forEach((n) => {
        nodeMap[n._id] = n
      })
      g.nodes().forEach((v) => {
        // console.log("Node " + v + ": " + JSON.stringify(g.node(v)));

        let node = nodeMap[v]

        // let node = this.nodes.find(n => n._id === v)
        let neWNodePos = g.node(v)
        if (instant) {
          this.$nextTick(() => {
            node.pos.x = neWNodePos.x
            node.pos.y = neWNodePos.y
            this.computeLayout()
          })
        } else {
          this.$nextTick(() => {
            this.tweenNode(node, neWNodePos)
          })
        }
      });

      if (resetZoom && this.zoom !== 1) {
        // this.zoom += 0.00000000000000000000000001
        await this.zoomBa({ to: 1 })
      }

      if (!instant) {
        this.links.forEach((link) => {
          link.running = false
          link.dashed = false
        })
        setTimeout(() => {
          this.links.forEach((link, i) => {
            link.running = true
            link.dashed = true
          })
        }, 1000)
      }

      if (goNode) {
        this.nodes.forEach(m => {
          m.isActive = false
        })
        goNode.isActive = true

        let nodeEl = this.$refs[`_node_${goNode._id}`][0]
        if (nodeEl) {
          let rect = nodeEl.getRect()
          await this.sleep(1)
          this.panToCenter({ rect })
        }
      } else if (goHome) {
        let homeNode = this.nodes.find(n => n.isRoot)
        if (homeNode) {
          this.nodes.forEach(m => {
            m.isActive = false
          })
          homeNode.isActive = true

          let nodeEl = this.$refs[`_node_${homeNode._id}`][0]
          if (nodeEl) {
            let rect = nodeEl.getRect()
            await this.sleep(1)
            this.panToCenter({ rect })
          }
        }
      } else {
        let activeNode = this.nodes.find(n => n.isActive)
        if (activeNode && this.$refs[`_node_${activeNode._id}`]) {
          let nodeEl = this.$refs[`_node_${activeNode._id}`][0]
          if (nodeEl) {
            let rect = nodeEl.getRect()
            await this.sleep(1)
            this.panToCenter({ rect })
          }
        }
      }



      // g.edges().forEach(function(e) {
      //   console.log("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(g.edge(e)));
      // });
      /* eslint-enable */
    },

    sleep (time) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, time || 0)
      })
    },
    onModeNodes (v, node, nodes) {
      let kids = Node.getAllChildren({ node, nodes, links: this.links })

      this.onMoveAll(kids, v)
      // this.moveNode(node, v)
      // let mover = (node) => {
      //   this.moveNode(node, v)

      //   let kids = this.getChildren(node)
      //   kids.forEach((k) => {
      //     mover(k)
      //   })
      // }
      // mover(node)
      // node.to ? this.moveNode(node, v) : this.onMoveAll(nodes, v)
    },
    onMoveAll (nodes, v) {
      nodes.forEach((node) => {
        node.pos.x += v.dx * this.zoom
        node.pos.y += v.dy * this.zoom
      })
      this.tempDisableDash()
      // this.$forceUpdate(0)
    },
    moveNode (node, v) {
      node.pos.x += v.dx * this.zoom
      node.pos.y += v.dy * this.zoom

      this.tempDisableDash()
      // this.$forceUpdate()
    },
    async toggleZoom () {
      if (this.zoom === 4) {
        await this.zoomBa({ to: 1 })
        // this.cleanLayout({ instant: false, goHome: false, resetZoom: true })
      } else {
        await this.zoomBa({ to: 4 })
        // this.cleanLayout({ instant: false, goHome: false, resetZoom: false })
      }
    },
    tweenNode (node, toPos) {
      if (toPos.x === node.pos.x && toPos.y === node.pos.y && toPos.z === node.pos.z) {
        return Promise.resolve()
      }
      return new Promise((resolve) => {
        new TWEEN.Tween(node.pos) // Create a new tween that modifies 'coords'.
          .to(toPos, 777) // Move to (300, 200) in 1 second.
          .easing(TWEEN.Easing.Elastic.Out) // Use an easing function to make the animation smooth.
          .onUpdate(() => { // Called after tween.js updates 'coords'.
            // Move 'box' to the position described by 'coords' with a CSS translation.
            this.computeLayout()
          })
          .onComplete(() => {
            resolve()
          })
          .start()
      })
    },
    // goHome () {
    //   new TWEEN.Tween(this.view) // Create a new tween that modifies 'coords'.
    //     .to({ x: 0, y: 0 }, 1500) // Move to (300, 200) in 1 second.
    //     .easing(TWEEN.Easing.Elastic.Out) // Use an easing function to make the animation smooth.
    //     .onUpdate(() => { // Called after tween.js updates 'coords'.
    //       // Move 'box' to the position described by 'coords' with a CSS translation.
    //       this.computeLayout()
    //     })
    //     .start()
    // },
    getChildren (node) {
      return Node.getAllChildren({ node, nodes: this.nodes, links: this.links })
      // return this.links.filter(c => c.to === node._id).map((c) => {
      //   return this.nodes.find(n => n._id === c.from)
      // })
    },
    getLinks (nodes) {
      return Node.getLinks({ nodes })
      // return nodes.reduce((arr, item, ii) => {
      //   let toNode = nodes.find(n => n._id === item.to)
      //   if (toNode && item.to !== null) {
      //     arr.push({
      //       _id: ii,
      //       dashed: true,
      //       running: true,
      //       toPos: toNode.pos,
      //       fromPos: item.pos,
      //       from: item._id,
      //       to: item.to
      //     })
      //     // arr.push({
      //     //   _id: ii,

      //     //   dashed: true,
      //     //   running: true,

      //     //   // this item = from
      //     //   from: item._id,
      //     //   // parent item = to
      //     //   to: toNode._id,

      //     //   get toPos () {
      //     //     return toNode.pos
      //     //   },
      //     //   get fromPos () {
      //     //     return item.pos
      //     //   }
      //     // })
      //   }
      //   return arr
      // }, [])
    },
    zoomBa ({ to }) {
      return new Promise((resolve, reject) => {
        new TWEEN.Tween(this) // Create a new tween that modifies 'coords'.
          .to({ zoom: to }, 0) // Move to (300, 200) in 1 second.
          .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
          .onUpdate(() => { // Called after tween.js updates 'coords'.
            // Move 'box' to the position described by 'coords' with a CSS translation.
            this.computeLayout()
          })
          .onComplete(() => {
            resolve()
          })
          .start()
      })
    },
    computeLayout ({ syncLinks = false } = {}) {
      this.win.width = this.rect.width
      this.win.height = this.rect.height

      this.viewBox = `0 0 ${this.win.width * this.zoom} ${this.win.height * this.zoom}`

      setTimeout(() => {
        if (syncLinks) {
          this.links = this.getLinks(this.nodes)
        }
      })

      this.mover = {
        transform: `translate3d(${this.view.x}px, ${this.view.y}px, 1px)`
      }
      // this.viewBox = `${-this.view.x} ${-this.view.y} ${this.width - this.view.x} ${this.height - this.view.y}`
    },
    onMove (v) {
      this.view.x += v.dx * this.zoom
      this.view.y += v.dy * this.zoom
      this.tempDisableDash()
    },
    tempDisableDash () {
      this.links.forEach((link) => {
        link.running = false
        link.dashed = false
      })
      clearTimeout(this.dashTimer)
      this.dashTimer = setTimeout(() => {
        this.links.forEach((link) => {
          link.running = true
          link.dashed = true
        })
      }, 350)
    }
  }
}
</script>

<style scoped>
.svgnodetree{
  background-color: #212121;
}
</style>
