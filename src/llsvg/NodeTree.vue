<template>
  <div class="full">
    <!-- preserveAspectRatio="preserveAspectRatio" -->
    <svg :height="win.height" :width="win.width" :viewBox="viewBox">
      <defs>
        <marker :id="`${uniq}circle-ok`" style="overflow:visible; cursor: pointer;">
          <circle r="3" :fill="'lime'" />
        </marker>
        <marker :id="`${uniq}circle-ready`" style="overflow:visible; cursor: pointer;">
          <!-- <circle r="3" :fill="`url(#${uniq}kale-salad)`" /> -->
          <circle r="3" :stroke="`rgba(255,0,255,1.0)`" :fill="`rgba(255,0,255,1.0)`" />
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
      <ScreenPanner @move="onMove" :win="win"></ScreenPanner>

      <!-- HUD UIs -->
      <NodeButton :pos="{ x: win.width - 60, y: 0 }" @click="goHome">
        <text x="0" y="0" slot="desc">GoHome</text>
      </NodeButton>
      <NodeButton :pos="{ x: win.width - 60, y: win.height - 60 }" @click="doLayout">
        <text x="0" y="0" slot="desc">doLayout</text>
      </NodeButton>

      <!-- Move the scene -->
      <g :style="mover">

        <g :key="node._id + node.to + ii" v-for="(node, ii) in nodes">
          <Node @move="(ev) => { onModeNodes(ev, node, nodes) }" :pos="node.pos"></Node>
        </g>

        <g :key="link.from + link.to + ii" v-for="(link, ii) in links">
          <NodePath :link="link" :uniq="uniq"></NodePath>
        </g>

      </g>

    </svg>
  </div>
</template>

<script>
import TWEEN from '@tweenjs/tween.js'

var dagre = require('dagre')
export default {
  dagre,
  components: {
    Node: require('./Node.vue').default,
    NodePath: require('./NodePath.vue').default,
    NodeButton: require('./NodeButton.vue').default,
    // LLPath: require('./LLPath.vue').default,
    ScreenPanner: require('./ScreenPanner.vue').default
  },
  data () {
    let win = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    let view = {
      x: 0,
      y: 0,
      z: 0
    }
    return {
      links: [],
      nodes: require('./nodes.json'),
      rect: { ...win },
      uniq: `u_${Number(Math.random() * 1000000).toFixed(0)}`,
      running: true,
      // xMinYMax slice
      // xMinYMid slice
      mover: {
      },
      // preserveAspectRatio: `xMinYMax slice`,
      viewBox: `0 0 ${win.width} ${win.height}`,
      view,
      win
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.rect = this.$el.getBoundingClientRect()
      this.resolveItem()
    })
    this.rect = this.$el.getBoundingClientRect()
    this.resolveItem()

    this.nodes.forEach(n => {
      n.pos.x = this.win.width / 2
      n.pos.y = this.win.height / 2
    })

    this.doLayout({ instnat: true })

    // let self = this
    function animate (time) {
      requestAnimationFrame(animate)
      TWEEN.update(time)
    }
    requestAnimationFrame(animate)
  },
  watch: {
    view: {
      deep: true,
      handler () {
        this.resolveItem()
      }
    }
  },
  methods: {
    doLayout ({ instnat } = {}) {
      let g = new dagre.graphlib.Graph()
      /* eslint-disable */
      // Set an object for the graph label
      g.setGraph({
        rankdir: 'BT',
        // https://github.com/dagrejs/dagre/wiki#using-dagre
        // align: 'UL'
      });

      // Default to assigning a new object as a label for each new edge.
      g.setDefaultEdgeLabel(function() { return {}; });

      // Add nodes to the graph. The first argument is the node id. The second is
      // metadata about the node. In this case we're going to add labels to each of
      // our nodes.

      this.nodes.forEach((node) => {
        let size = 60
        if (node.to === null) {
          size = 60
        }
        g.setNode(node._id, { label: node._id, x: 0, y: 0, width: size, height: size });
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

      g.nodes().forEach((v) => {
        console.log("Node " + v + ": " + JSON.stringify(g.node(v)));

        let node = this.nodes.find(n => n._id === v)
        let neWNodePos = g.node(v)
        if (instnat) {
          this.$nextTick(() => {
            node.pos.x = neWNodePos.x
            node.pos.y = neWNodePos.y
            this.resolveItem()
          })
        } else {
          this.tweenNode(node, neWNodePos)
        }
        //
      });

      // g.edges().forEach(function(e) {
      //   console.log("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(g.edge(e)));
      // });

      /* eslint-enable */
    },
    onModeNodes (v, node, nodes) {
      this.moveNode(node, v)
      let mover = (node) => {
        let kids = this.getChildren(node)
        this.onMoveAll(kids, v)

        kids.forEach((k) => {
          mover(k)
        })
      }
      mover(node)
      // node.to ? this.moveNode(node, v) : this.onMoveAll(nodes, v)
    },
    onMoveAll (nodes, v) {
      nodes.forEach((node) => {
        node.pos.x += v.dx
        node.pos.y += v.dy
      })
      // this.$forceUpdate(0)
    },
    moveNode (node, v) {
      node.pos.x += v.dx
      node.pos.y += v.dy
      // this.$forceUpdate()
    },
    tweenNode (node, toPos) {
      new TWEEN.Tween(node.pos) // Create a new tween that modifies 'coords'.
        .to(toPos, 2500) // Move to (300, 200) in 1 second.
        .easing(TWEEN.Easing.Elastic.Out) // Use an easing function to make the animation smooth.
        .onUpdate(() => { // Called after tween.js updates 'coords'.
          // Move 'box' to the position described by 'coords' with a CSS translation.
          this.resolveItem()
        })
        .start()
    },
    goHome () {
      new TWEEN.Tween(this.view) // Create a new tween that modifies 'coords'.
        .to({ x: 0, y: 0 }, 1500) // Move to (300, 200) in 1 second.
        .easing(TWEEN.Easing.Elastic.Out) // Use an easing function to make the animation smooth.
        .onUpdate(() => { // Called after tween.js updates 'coords'.
          // Move 'box' to the position described by 'coords' with a CSS translation.
          this.resolveItem()
        })
        .start()
    },
    getChildren (node) {
      return this.links.filter(c => c.to === node._id).map((c) => {
        return this.nodes.find(n => n._id === c.from)
      })
    },
    getLinks (nodes) {
      return nodes.reduce((arr, item, ii) => {
        let toNode = nodes.find(n => n._id === item.to)
        if (toNode && item.to !== null) {
          arr.push({
            _id: ii,
            toPos: toNode.pos,
            fromPos: item.pos,
            from: item._id,
            to: item.to
          })
        }
        return arr
      }, [])
    },
    resolveItem () {
      this.win.width = this.rect.width
      this.win.height = this.rect.height
      this.viewBox = `0 0 ${this.win.width} ${this.win.height}`
      this.links = this.getLinks(this.nodes)

      // let minx = Math.min(...this.nodes.map(b => b.pos.x))
      // let miny = Math.min(...this.nodes.map(b => b.pos.y))

      // let maxx = Math.max(...this.nodes.map(b => b.pos.x))
      // let maxy = Math.max(...this.nodes.map(b => b.pos.y))

      // let ydiff = maxy// - miny
      // let xdiff = maxx// - minx

      this.mover = {
        transform: `translate3d(${this.view.x}px, ${this.view.y}px, 1px)`
      }
      // this.viewBox = `${-this.view.x} ${-this.view.y} ${this.width - this.view.x} ${this.height - this.view.y}`
    },
    onMove (v) {
      this.view.x += v.dx
      this.view.y += v.dy
    }
  }
}
</script>

<style scoped>

</style>
