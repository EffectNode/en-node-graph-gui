<template>
  <div class="corner-layer">
    <div class="uit-icon" :class="{ isActivated: show === 'trashed' }" @click="onGoHome()">
      <img src="../icons/home.svg" title="oraganise" alt="oraganise">
    </div>
    <div class="uit-icon" @click="$parent.$refs['editor'].toggleZoom()">
      <img src="../icons/magnify.svg" title="map view" alt="map view">
    </div>
    <div class="uit-icon" v-if="nodes.some(n => n.trashed)" @click="() => { onToggleRecycleView() }">
      <img v-if="isAtRecycle()" class="isActivated" src="../icons/recycle-on.svg" title="Recycle view" alt="Recycle view">
      <img v-if="!isAtRecycle()"  src="../icons/recycle-off.svg" title="Recycle view" alt="Recycle view">
    </div>

  </div>
</template>

<script>
export default {
  props: {
    show: {},
    node: {},
    nodes: {}
  },
  created () {
  },
  mounted () {
  },
  methods: {
    isAtRecycle () {
      return this.show === 'trashed'
    },
    onGoHome () {
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
          this.$parent.$refs['editor'].cleanLayout({ instant: false, goHome: true, resetZoom: true })
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
  top: 0px;
  left: 0px;
  /* width: calc(60px * 2); */
  display: flex;
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
