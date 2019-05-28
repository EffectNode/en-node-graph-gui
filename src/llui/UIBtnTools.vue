<template>
  <div class="corner-layer">
    <div class="uit-icon" :class="{ isActivated: show === 'trashed' }" @click="onGoHome()">
      <img src="../icons/pin.svg" title="Go Home" alt="Go Home">
    </div>
    <div class="uit-icon" @click="zoomIn()">
      <img src="../icons/magnify-add.svg" title="Zoom In" alt="Zoom In">
    </div>
    <div class="uit-icon" @click="zoomRestore()">
      <img src="../icons/magnify.svg" title="Zoom Restore" alt="Zoom Restore">
    </div>
    <div class="uit-icon" @click="zoomOut()">
      <img src="../icons/magnify-minus.svg" title="Zoom Out" alt="Zoom Out">
    </div>
    <div v-if="modes.isEditor" class="uit-icon" @click="toggleMedia()">
      <img src="../icons/folder.svg" title="media view" alt="media view">
    </div>
    <!-- <div class="uit-icon" @click="toggleTimeline()">
      <img src="../icons/timer.svg" title="map view" alt="map view">
    </div> -->
    <div class="uit-icon" v-if="nodes.some(n => n.trashed)" @click="() => { onToggleRecycleView() }">
      <img v-if="isAtRecycle()" class="isActivated" src="../icons/recycle-on.svg" title="Recycle view" alt="Recycle view">
      <img v-if="!isAtRecycle()"  src="../icons/recycle-off.svg" title="Recycle view" alt="Recycle view">
    </div>

    <div class="uit-icon" @click="$emit('download')">
      <img src="../icons/cloud-download.svg" title="Download" alt="Download">
    </div>
    <div class="uit-icon" @click="$emit('codepen')">
      <img src="../icons/code.svg" title="Download" alt="Download">
    </div>

  </div>
</template>

<script>
//

export default {
  props: {
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
        zoomTo = 1
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
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.uit-icon img{
  width: 30px;
  height: 30px;
  cursor: pointer;
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
</style>
