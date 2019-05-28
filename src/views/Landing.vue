<template>
  <div class="landing">
    <StickyNav></StickyNav>
    <Introduction></Introduction>
    <SectionDemo></SectionDemo>
  </div>
</template>

<script>
export default {
  components: {
    Introduction: () => import(/* webpackChunkName: "igraph-demo" */'../components/Introduction.vue'),
    StickyNav: () => import(/* webpackChunkName: "igraph-demo" */'../components/StickyNav.vue'),
    SectionDemo: () => import(/* webpackChunkName: "igraph-demo" */'../components/SectionDemo.vue')
  },
  beforeCreate () {
    document.body.style.backgroundColor = 'black'
  },
  beforeDestroy () {
    document.body.style.backgroundColor = 'unset'
  }
}
</script>

<style scoped>
.landing{
  width: 100%;
  height: 100%;
  min-height: 100%;
}

.computer{

}
</style>
