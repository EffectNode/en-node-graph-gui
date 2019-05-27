<template>
  <div class="landing">
    <StickyNav></StickyNav>
    <SectionDemo></SectionDemo>
  </div>
</template>

<script>
export default {
  components: {
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
