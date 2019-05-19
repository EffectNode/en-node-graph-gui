<template>
  <div>
    <!-- <p>
      ID
    </p> -->
    <!-- <input type="text" :value="node._id"  @input="$emit('onInputID', { node, nodes, newValue: $event.target.value })"> -->

    <!-- <p>
      ID
    </p>
    <input type="text" v-model="node._id" @input="$emit('onInputAnimate', { node })"> -->
    <!-- <p>
      parent
    </p>
    <input type="text" v-model="node.to"  @input="$emit('onInputAnimate', { node })"> -->

    <h1>{{ node.title }}</h1>
    <input type="text" v-model="node.title">
    <p>type</p>
    <input type="text" v-model="node.type">

    <ul v-bind="node.library = node.library || []">
      <li :key="ii" v-for="(lib, ii) in node.library">
        <input type="text" v-model="lib.url">
        <button @click="removeLib({ libs: node.library, lib, idx: ii })">X</button>
      </li>
      <li><button @click="addLib({ libs: node.library, add: adderLib })">Add</button> <input type="text" v-model="adderLib"></li>
    </ul>

    <select v-if="node.type === 'root'" v-model="node.sceneID" @change="$emit('reload')">
      <option :value="node._id" :key="node._id" v-for="node in nodes.filter(t => t.type === 'scene')">{{ node.title }}</option>
    </select>

    <select v-if="node.type === 'root'" v-model="node.cameraID" @change="$emit('reload')">
      <option :value="node._id" :key="node._id" v-for="node in nodes.filter(t => t.type === 'camera')">{{ node.title }}</option>
    </select>

    <button v-if="!node.trashed" @click="$emit('openCoder', { node, nodes })">Code this</button>
<!--
    <br />
    <button v-if="!node.trashed" @click="addEmptyChildTo({ node, nodes })">Add TE Child</button> -->

    <br />
    <button v-if="!node.trashed" @click="addObject3DChildTo({ node, nodes })">Add Object3D Child</button>

    <br />
    <button v-if="!node.trashed" @click="addSphereGeometry({ node, nodes })">Add Sphere Geometry Child</button>

    <br />
    <button v-if="!node.trashed" @click="addScene({ node, nodes })">Add Scene</button>

    <br />
    <button v-if="!node.trashed" @click="addDrawable({ node, nodes })">Add Drawable Child</button>

    <br />
    <button v-if="!node.trashed" @click="addBasicSolidMaterial({ node, nodes })">Add Basic Solid Material Child</button>

    <div>
      <br />
      <button v-if="!node.trashed" @click="recycleNode({ node, nodes })">Recycle Node and SubTree</button>
      <button v-if="node.trashed" @click="restoreNode({ node, nodes })">Restore</button>
      <br />
      <button v-if="node.trashed" @click="removeNodePerm({ node, nodes })">PermDelete Node and SubTree</button>
    </div>

    <pre>{{ node }}</pre>
  </div>
</template>

<script>
import * as Node from '../llsvg/node.js'
export default {
  props: {
    node: {
      required: true
    },
    nodes: {
      required: true
    }
  },
  data () {
    return {
      adderLib: ''
    }
  },
  methods: {
    setViewingMe () {

    },
    removeLib ({ libs, idx, lib }) {
      libs.splice(idx, 1)
      this.$forceUpdate()
      this.$emit('reload')
    },
    addLib ({ libs, add }) {
      libs.push({
        _id: Node.getID(),
        url: add
      })
      this.$forceUpdate()
      this.$emit('reload')
    },
    removeNodePerm ({ node, nodes }) {
      let links = Node.getLinks({ nodes })
      let allChd = Node.getAllChildren({ node, nodes, links })

      let markDelNode = (node) => {
        node.toBeRemoved = true
      }
      markDelNode(node)

      // all descendets
      allChd.forEach((n) => {
        markDelNode(n)
      })

      // this node
      this.$forceUpdate()

      this.nodes.filter(n => n.toBeRemoved).forEach(n => {
        let idx = this.nodes.findIndex(no => no._id === n._id)
        this.nodes.splice(idx, 1)
      })

      this.$emit('close', { node, nodes })
      this.$emit('onLayout', {
        node,
        nodes,
        args: {
          goNode: nodes.find(m => m._id === node.to)
        }
      })
      this.$emit('reload')
    },
    recycleNode ({ node, nodes }) {
      let links = Node.getLinks({ nodes })
      let allChd = Node.getAllChildren({ node, nodes, links })

      let trashNode = (node) => {
        node.trashed = true
      }
      trashNode(node)

      // all descendets
      allChd.forEach((n) => {
        trashNode(n)
      })

      // this node
      this.$forceUpdate()

      this.$emit('close', { node, nodes })
      this.$emit('onLayout', {
        node,
        nodes,
        args: {
          goNode: nodes.find(m => m._id === node.to)
        }
      })
      this.$emit('reload')
    },
    restoreNode ({ node, nodes }) {
      let links = Node.getLinks({ nodes })
      let allChd = Node.getAllChildren({ node, nodes, links })

      let trashNode = (node) => {
        node.trashed = false
      }
      trashNode(node)

      // all descendets
      allChd.forEach((n) => {
        trashNode(n)
      })

      this.$emit('nodes', [...this.nodes])

      // this node
      this.$forceUpdate()

      this.$emit('close', { node, nodes })
      this.$emit('reload')
    },
    // addEmptyChildTo ({ node, nodes }) {
    //   let args = {
    //     src: ``,
    //     library: []
    //   }
    //   this.addChildTo({ node, nodes, args })
    // },
    addBasicSolidMaterial ({ node, nodes }) {
      let args = {
        title: `New Solid Material`,
        type: `material`,
        /* eslint-disable */
        src: require('raw-loader!./UINodeTemplates/SolidMaterial.vue.txt').default,
        /* eslitnt-enable */
        library: []
      }
      this.addChildTo({ node, nodes, args })
    },
    addSphereGeometry ({ node, nodes }) {
      let args = {
        title: `New Sphere Geometry`,
        type: `geometry`,
        /* eslint-disable */
        src: require('raw-loader!./UINodeTemplates/SphereGeometry.vue.txt').default,
        /* eslitnt-enable */
        library: []
      }
      this.addChildTo({ node, nodes, args })
    },
    addScene ({ node, nodes }) {
      let args = {
        title: `New Scene`,
        type: `scene`,
        /* eslint-disable */
        src: require('raw-loader!./UINodeTemplates/Scene.vue.txt').default,
        /* eslitnt-enable */
        library: []
      }
      this.addChildTo({ node, nodes, args })
    },
    addDrawable ({ node, nodes }) {
      let args = {
        title: `Mesh`,
        type: `drawable`,
        /* eslint-disable */
        src: require('raw-loader!./UINodeTemplates/Drawable.vue.txt').default,
        /* eslitnt-enable */
        library: []
      }
      this.addChildTo({ node, nodes, args })
    },
    addObject3DChildTo ({ node, nodes }) {
      let args = {
        title: `Object 3D`,
        type: `object3D`,
        /* eslint-disable */
        src: require('raw-loader!./UINodeTemplates/Object3D.vue.txt').default,
        /* eslitnt-enable */
        library: []
      }
      this.addChildTo({ node, nodes, args })
    },
    addChildTo ({ node, nodes, args = {} }) {
      let parentID = node._id
      let newNode = Node.getNodeTemplate()
      newNode._id = Node.getID()
      newNode.to = parentID
      newNode.trashed = node.trashed
      newNode.title = `My New Node`
      newNode.pos = { ...node.pos }
      // this.nodes.forEach(m => {
      //   m.isActive = false
      // })
      // newNode.isActive = true
      newNode.src = ``
      newNode.library = []
      newNode = {
        ...newNode,
        ...args
      }
      this.nodes.push(
        newNode
      )
      this.$emit('onLayout', { node, nodes })
      this.$emit('reload')
    }
  },
  created () {
    // this.$on('onInputID', ({ node, nodes, newValue }) => {
    //   let links = Node.getLinks({ nodes })
    //   let allChd = Node.getAllChildren({ node, nodes, links })

    //   node._id = newValue

    //   // all descendets
    //   allChd.filter(n => n._id !== node._id).forEach((n) => {
    //     n.to = newValue
    //   })

    //   // this node
    //   this.$forceUpdate()
    //   this.$emit('onNodeCountChange', { node, nodes })
    // })
  }
}
</script>

<style>

</style>
