<template>
  <div class="uicontrols">
    <div class="section-block">
      <div class="section-title">Title</div>
      <input class="textinput" placeholder="cutsom types..." type="text" v-model="node.title">
    </div>
    <div class="section-block">
      <div class="section-title">Type of Item</div>
      <select :disabled="node.type === 'root'" class="selsel" v-model="node.type" @change="otherType = node.type">
        <option disabled value="root">App Engine</option>
        <option value="scene">Scene</option>
        <option value="camera">Camera</option>
        <option value="object3D">Object3D</option>
        <option value="drawable">Mesh / Points / LineSegments</option>
        <option value="geometry">Geometry</option>
        <option value="material">Material</option>
        <option value="organiser">Organiser</option>
        <option :value="otherType">Others: {{ otherType }}</option>
      </select>
      <input v-if="node.type !== 'root'" class="textinput" placeholder="Other types..." type="text" v-model="otherType" @change="(v) => { node.type = v.target.value }">
    </div>

    <div class="section-block">
      <div class="section-title">Custom Code</div>
      <button class="inspector-btn" v-if="node" @click="$emit('openCoder', { node, nodes })">Edit Code</button>
    </div>
    <div class="section-block">

      <div class="section-title">Add Library</div>
      <div v-bind="node.library = node.library || []">
        <div>
          <input type="text" class="textinput" placeholder="New Library URL...." v-model="adderLib" style="width: calc(80% - 40px)">
          <button class="inspector-btn" @click="addLib({ libs: node.library, add: adderLib })" style="width: calc(20%)">Add</button>
        </div>
      </div>
      <div :key="ii" v-for="(lib, ii) in node.library">
        <input class="textinput" type="text" v-model="lib.url" style="width: calc(80% - 40px)">
        <button class="inspector-btn small" @click="removeLib({ libs: node.library, lib, idx: ii })" style="width: calc(20%)">X</button>
      </div>
    </div>

    <div>
      <div class="section-title">Add Example Item</div>
      <div>
        <button class="inspector-btn left-align" v-if="!node.trashed" @click="addScene({ node, nodes })">+ Scene</button>
      </div>

      <div>
        <button class="inspector-btn left-align" v-if="!node.trashed" @click="addCamera({ node, nodes })">+ Camera</button>
      </div>
      <div>
        <button class="inspector-btn left-align" v-if="!node.trashed" @click="addObject3DChildTo({ node, nodes })">+ Object3D</button>
      </div>
      <div>
        <button class="inspector-btn left-align" v-if="!node.trashed" @click="addMesh({ node, nodes })">+ Mesh</button>
      </div>
      <div>
        <button class="inspector-btn left-align" v-if="!node.trashed" @click="addMatCapMaterial({ node, nodes })">+ MatCap Material</button>
      </div>
      <div>
        <button class="inspector-btn left-align" v-if="!node.trashed" @click="addSphereGeometry({ node, nodes })">+ Sphere Geometry</button>
      </div>

      <div>
        <button class="inspector-btn left-align" v-if="!node.trashed" @click="addExample({ node, nodes })">+ Sample Ball</button>
      </div>
      <div>
        <button class="inspector-btn left-align" v-if="!node.trashed" @click="addWireFrame({ node, nodes })">+ Basic Solid Material</button>
      </div>
    </div>

    <div class="section-block">
      <div class="section-title">Recycle Bin</div>

      <button class="inspector-btn" v-if="!node.trashed && !node.preventDelete && !node.confirmRecylce" @click="node.confirmRecylce = true; $forceUpdate()">Recycle Node and SubTree</button>
      <button class="inspector-btn red" v-if="!node.trashed && !node.preventDelete && node.confirmRecylce" @click="recycleNode({ node, nodes })">Confirm Recycle</button>

      <div class="checkbox-item" v-if="!node.trashed && node.type !== 'root'">
        Prevent Delete
        <input type="checkbox" v-model="node.preventDelete">
      </div>
      <div class="checkbox-item" v-if="node.type === 'root'">
        Cannot Delete App Engine
      </div>

      <button class="inspector-btn" v-if="node.trashed" @click="restoreNode({ node, nodes })">Restore Item</button>
      <button class="inspector-btn" v-if="node.trashed" @click="removeNodePerm({ node, nodes })">Permanently Delete</button>
    </div>

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
<!--
    <input type="text" v-model="node.title">
    <p>type</p>
    <input type="text" v-model="node.type"> -->

    <!-- <select v-if="node.type === 'root'" v-model="node.sceneID" @change="$emit('reload')">
      <option :value="node._id" :key="node._id" v-for="node in nodes.filter(t => t.type === 'scene')">{{ node.title }}</option>
    </select>

    <select v-if="node.type === 'root'" v-model="node.cameraID" @change="$emit('reload')">
      <option :value="node._id" :key="node._id" v-for="node in nodes.filter(t => t.type === 'camera')">{{ node.title }}</option>
    </select> -->

    <!-- <p>
      Keyname
    </p>
    <p>
      <input type="text" v-model="node.keyname">
    </p> -->

    <!-- <button v-if="!node.trashed" @click="$emit('openCoder', { node, nodes })">Code editor</button> -->
    <!--
    <br />
    <button v-if="!node.trashed" @click="addEmptyChildTo({ node, nodes })">Add TE Child</button> -->

    <!-- <div>
      <br />
      <button v-if="!node.trashed" @click="recycleNode({ node, nodes })">Recycle Node and SubTree</button>
      <button v-if="node.trashed" @click="restoreNode({ node, nodes })">Restore</button>
      <button v-if="node.trashed" @click="removeNodePerm({ node, nodes })">PermDelete Node and SubTree</button>
    </div>

    <pre>{{ node }}</pre> -->
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
    },
    timeline: {
      required: true
    }
  },
  data () {
    return {
      otherType: '',
      newTrackID: '',
      adderLib: ''
    }
  },
  watch: {
    node () {
      this.otherType = this.node.type
    }
  },
  mounted () {
    this.otherType = this.node.type
  },
  methods: {
    getTrackTitle ({ trackID }) {
      let track = this.timeline.tracks.find(t => t._id === trackID)
      if (track) {
        return track.title
      }
    },
    addTrack ({ trackID }) {
      this.node.trackIDs = this.node.trackIDs || []
      this.node.trackIDs.push({
        _id: Node.getID(),
        trackID
      })
      this.$forceUpdate()
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
      if (window.prompt(`Copy and paste "${node.title}" to remove item.`) === node.title) {
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
      }
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

      this.$emit('nodes', [...this.nodes])

      this.$emit('close', { node, nodes })
      this.$emit('onLayout', {
        node,
        nodes,
        args: {
          goNode: nodes.find(m => m._id === node.to)
        }
      })
      this.$emit('reload')
      this.$root.$forceUpdate()
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
    addWireFrame ({ node, nodes, returnNode }) {
      let args = {
        title: `WireFrame Material`,
        type: `material`,
        /* eslint-disable */
        src: require('raw-loader!./UINodeTemplates/WireFrameMaterial.vue.txt').default,
        /* eslitnt-enable */
        library: []
      }
      return this.addChildTo({ node, nodes, args, returnNode })
    },
    addSphereGeometry ({ node, nodes, returnNode }) {
      let args = {
        title: `Sphere Geometry`,
        type: `geometry`,
        /* eslint-disable */
        src: require('raw-loader!./UINodeTemplates/SphereGeometry.vue.txt').default,
        /* eslitnt-enable */
        library: []
      }
      return this.addChildTo({ node, nodes, args, returnNode })
    },
    addMatCapMaterial ({ node, nodes, returnNode }) {
      let args = {
        title: `MatCap Material`,
        type: `material`,
        /* eslint-disable */
        src: require('raw-loader!./UINodeTemplates/MatcapMaterial.vue.txt').default,
        /* eslitnt-enable */
        library: []
      }
      return this.addChildTo({ node, nodes, args, returnNode })
    },
    addCamera ({ node, nodes, returnNode }) {
      let args = {
        title: `Camera`,
        type: `camera`,
        /* eslint-disable */
        src: require('raw-loader!./UINodeTemplates/Camera.vue.txt').default,
        /* eslitnt-enable */
        library: []
      }
      return this.addChildTo({ node, nodes, args, returnNode })
    },
    addScene ({ node, nodes, returnNode }) {
      let args = {
        title: `Scene`,
        type: `scene`,
        /* eslint-disable */
        src: require('raw-loader!./UINodeTemplates/Scene.vue.txt').default,
        /* eslitnt-enable */
        library: []
      }
      return this.addChildTo({ node, nodes, args, returnNode })
    },
    addMesh ({ node, nodes, returnNode }) {
      let args = {
        title: `Mesh`,
        type: `drawable`,
        /* eslint-disable */
        src: require('raw-loader!./UINodeTemplates/Drawable.vue.txt').default,
        /* eslitnt-enable */
        library: []
      }
      return this.addChildTo({ node, nodes, args, returnNode })
    },
    addExample ({ node, nodes, returnNode }) {
      let meshNode = this.addMesh({ node, nodes, returnNode: true })
      let matNode = this.addWireFrame({ node, nodes, returnNode: true })
      let geoNode = this.addSphereGeometry({ node, nodes, returnNode: true })
      matNode.to = meshNode._id
      geoNode.to = meshNode._id

      this.doLayoutAndReload({ node, nodes })
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
    addChildTo ({ node, nodes, args = {}, returnNode }) {
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
      if (returnNode) {
        return newNode
      }
      this.doLayoutAndReload({ node, nodes })
    },
    doLayoutAndReload ({ node, nodes }) {
      this.$emit('onLayout', { node, nodes })
      this.$emit('reload')
      this.$forceUpdate()
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

<style scoped>
.uicontrols{
  /* background-color: black; */
  color: white;
}

button,
select,
input{
  color: black;
}

select.selsel {
   -webkit-appearance: button;
   -webkit-border-radius: 2px;
   -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
   -webkit-padding-end: 20px;
   -webkit-padding-start: 2px;
   -webkit-user-select: none;

   background-image: url(../assets/ui/select.png), linear-gradient(#FAFAFA, #F4F4F4 40%, #E5E5E5);
   background-position: 97% center;
   background-repeat: no-repeat;
   border: 1px solid #AAA;
   color:rgb(43, 43, 43);
   font-size: inherit;
   margin-left: 0px;
   overflow: hidden;
   padding: 5px 10px;
   text-overflow: ellipsis;
   white-space: nowrap;
   width: calc(100% - 20px * 2);
}

select.selsel:disabled{
  color: rgb(175, 175, 175);
  background-image: none;
}

.textinput{
  appearance: none;
  border: 1px solid #AAA;
  color: rgb(43, 43, 43);
  font-size: inherit;
  margin-left: 0px;
  overflow: hidden;
  padding: 5px 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: calc(100% - 20px * 2);
}

.textinput::-webkit-input-placeholder{
  color: rgb(43, 43, 43);
}

.section-title{
  font-size: 19px;
  margin-bottom: 10px;
  font-weight: bold;
  padding-left: 20px;
  border-left: white solid 1px;
}
.section-block{
  margin-top: 20px;
  margin-bottom: 20px;
}

.inspector-btn{
  appearance: none;
  border: 1px solid #AAA;
  color: rgb(43, 43, 43);
  font-size: inherit;
  margin-left: 0px;
  overflow: hidden;
  padding: 5px 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: calc(100% - 20px * 2);
}

.inspector-btn.left-align{
  text-align: left;
}
.inspector-btn:hover{
  background-color: rgba(255,255,255,1.0);
}
.inspector-btn.red{
  color: red;
}
.checkbox-item{
  margin-bottom: 15px;
}
</style>
