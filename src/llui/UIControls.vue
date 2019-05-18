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

    <button v-if="!node.trashed" @click="addChildTo({ node, nodes })">Add Child</button>
    <div v-if="!node.protected">
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
  methods: {
    removeNodePerm ({ node, nodes }) {
      let links = Node.getLinks({ nodes })
      let allChd = Node.getAllChildren({ node, nodes, links })

      let remove1NodePermenetly = (node) => {
        let idx = nodes.findIndex(n => n._id === node._id)
        nodes.splice(idx, 1)

        this.$forceUpdate()
      }

      remove1NodePermenetly(node)

      // all descendets
      allChd.forEach((n) => {
        remove1NodePermenetly(n)
      })
      // this node

      this.$emit('close', { node, nodes })
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

      this.$emit('nodes', [...this.nodes])

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
    },
    addChildTo ({ node, nodes }) {
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
      this.nodes.push(
        newNode
      )
      this.$emit('onLayout', { node, nodes })
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
