<template>
  <div class="corner-layer">
    <div v-if="modes.isEditor && modes.isLoggedIn" class="uit-icon" @click="$router.push('/myhome')">
      <img src="../icons/home.svg" title="media view" alt="media view">
    </div>

    <div v-if="!isAtRecycle()" class="uit-icon" :class="{ isActivated: show === 'trashed' }">
      <img  @click="onGoHome()" src="../icons/node-home.svg" title="Go Home" alt="Go Home">
    </div>

    <div v-if="isAtRecycle()"  class="uit-icon" :class="{ isActivated: show === 'trashed' }">
      <img  @click="() => { onToggleRecycleView() }" class="isActivated" src="../icons/back.svg" title="Back view" alt="Back view">
    </div>

    <div class="uit-icon" @click="zoomIn()">
      <img src="../icons/magnify-add.svg" title="Zoom In" alt="Zoom In">
    </div>

    <!-- <div class="uit-icon" @click="zoomRestore()">
      <img src="../icons/magnify.svg" title="Zoom Restore" alt="Zoom Restore">
    </div> -->

    <div class="uit-icon" @click="zoomOut()">
      <img src="../icons/magnify-minus.svg" title="Zoom Out" alt="Zoom Out">
    </div>

    <!-- <div v-if="modes.isEditor" class="uit-icon" @click="toggleMedia()">
      <img src="../icons/folder.svg" title="media view" alt="media view">
    </div> -->

    <!-- <div class="uit-icon" @click="toggleTimeline()">
      <img src="../icons/timer.svg" title="map view" alt="map view">
    </div> -->

    <div v-if="modes.isEditor" class="uit-icon" @click="$emit('codefork')">
      <!-- <img src="../icons/code-fork.svg" title="Clone" alt="Clone"> -->
      <img src="../icons/code-fork.svg" title="Clone" alt="Clone">
    </div>

    <div v-if="modes.isEditor" class="uit-icon" @click="$emit('download')">
      <img src="../icons/save-to-drive.svg" title="Save to Hard Drive" alt="Save to Hard Drive">
    </div>

    <div class="uit-icon" @click="$emit('codepen')">
      <img src="../icons/code.svg" title="Deploy to CodePen" alt="Deploy to CodePen">
    </div>

    <div class="uit-icon" v-if="!isAtRecycle() && nodes.some(n => n.trashed)" @click="() => { onToggleRecycleView() }">
      <!-- <img v-if="isAtRecycle()" class="isActivated" src="../icons/back.svg" title="Recycle view" alt="Recycle view"> -->
      <img src="../icons/trashcan.svg" title="Recycle view" alt="Recycle view">
    </div>

    <div class="uit-icon" v-if="modes.isEditor && !modes.viewOnly" v-show="loading">
      <img src="../icons/refresh.svg" class="spin" title="Refreshing" alt="Refreshing">
    </div>

    <div class="uit-icon no-click" v-if="modes.viewOnly">
      <img src="../icons/offline.svg" title="Cannot Save, View Only" alt="Cannot Save, View Only">
    </div>

    <div v-if="modes.viewOnly && !modes.isLoggedIn" class="uit-icon" @click="$emit('login')">
      <img src="../icons/code-fork-blue.svg" title="Login and Clone" alt="Login and Clone">
    </div>

    <div v-if="isAtRecycle()"  class="uit-icon">
      <img  @click="clearTrash({ nodes })" src="../icons/trash-clear.svg" title="Clean Recylce Bin" alt="Clean Recylce Bin">
    </div>

  </div>
</template>

<script>
export default {
  props: {
    loading: {},
    modes: {},
    open: {},
    show: {},
    node: {},
    nodes: {}
  },
  created () {
  },
  mounted () {
  },
  methods: {
    clearTrash ({ nodes }) {
      let cmd = `clear trash forever`
      if ((window.prompt(`type "${cmd}" to clear trash`) || '').toLowerCase() === cmd.toLowerCase()) {
        nodes.filter(n => n.trashed).forEach(n => {
          let idx = nodes.findIndex(no => no._id === n._id)
          nodes.splice(idx, 1)
        })
        this.$emit('show', 'normal')
      }
    },
    toggleMedia () {
      this.open.mediabox = !this.open.mediabox
    },
    toggleTimeline () {
      this.$parent.open.timeline = !this.$parent.open.timeline
      this.$forceUpdate()
    },
    isAtRecycle () {
      return this.show === 'trashed'
    },
    async zoomOut () {
      let zoomLevel = this.$parent.$refs['editor'].zoom
      this.zoom({ to: zoomLevel + 0.33 })
    },
    async zoom ({ to }) {
      await this.$parent.$refs['editor'].zoomBa({ to })

      this.nodes.forEach((n) => {
        n.isActive = false
      })

      if (this.node) {
        this.node.isActive = true
      }
      this.$nextTick(() => {
        if (this.$parent.show === 'normal') {
          this.$parent.$refs['editor'].cleanLayout({ instant: true, goNode: this.nodes.find(n => n.isActive), resetZoom: false })
        } else {
          this.$parent.$refs['editor'].cleanLayout({ instant: true, goNode: this.nodes.find(n => n.trashed), resetZoom: false })
        }
      })
    },
    async zoomRestore () {
      let zoomTo = 3
      if (window.innerWidth >= 767 && window.innerWidth <= 1280) {
        zoomTo = 1.25
      } else if (window.innerWidth > 1280) {
        zoomTo = 1.25
      }
      this.zoom({ to: zoomTo })
    },
    async zoomIn () {
      let zoomLevel = this.$parent.$refs['editor'].zoom
      if (zoomLevel > 0.8) {
        this.zoom({ to: zoomLevel - 0.33 })
      } else {
        this.nodes.forEach((n) => {
          n.isActive = false
        })

        if (this.node) {
          this.node.isActive = true
        }
      }
    },

    async onGoHome () {
      this.$emit('show', 'normal')
      this.$nextTick(() => {
        this.$parent.$refs['editor'].cleanLayout({ instant: false, goHome: true, resetZoom: true })
      })
    },
    onToggleRecycleView () {
      if (this.$parent.show === 'trashed') {
        this.$parent.show = 'normal'
      } else if (this.$parent.show === 'normal') {
        this.$parent.show = 'trashed'
      }

      this.$nextTick(() => {
        if (this.$parent.show === 'normal') {
          this.$nextTick(() => {
            this.onGoHome()
          })
          // this.$parent.$refs['editor'].cleanLayout({ instant: false, goHome: true, resetZoom: true })
        } else {
          this.$parent.$refs['editor'].cleanLayout({ instant: false, goNode: this.nodes.find(n => n.trashed), resetZoom: true })
        }
      })
    }
  }
}
</script>

<style>
.corner-layer{
  position: absolute;
  top: 10px;
  left: 10px;
  /* width: calc(60px * 2); */
  display: flex;
  border-radius: 50px;
  background-color: rgba(33, 33, 33, 0.637);
  box-shadow: 0px 0px 10px 0px #212121;

  user-select: none;
  touch-action: none;
}
.uit-icon{
  display: inline-block;
  width: 53px;
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.uit-icon img{
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.no-click img{
  cursor: auto;
}

@keyframes isActivated {
  0%{
    transform: scale(1)
  }
  90% {
    transform: scale(1.1)
  }
  100% {
    transform: scale(1.0)
  }
}
.isActivated{
  animation: isActivated 0.5s linear 0s infinite normal both;
}
@keyframes spinner {
  0%{
    transform: rotate(0deg)
  }
  100%{
    transform: rotate(-360deg)
  }
}
.spin{
  animation: spinner 1.3s linear 0s infinite normal both;
}
</style>
