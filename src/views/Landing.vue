<template>
  <div class="landing">
    <StickyNav></StickyNav>
    <Introduction></Introduction>
    <Demonstraion></Demonstraion>
    <Examples></Examples>
    <Explaination></Explaination>
  </div>
</template>

<script>
export default {
  components: {
    Examples: () => import(/* webpackChunkName: "landing" */'../components/Examples.vue'),
    Introduction: () => import(/* webpackChunkName: "landing" */'../components/Introduction.vue'),
    StickyNav: () => import(/* webpackChunkName: "landing" */'../components/StickyNav.vue'),
    Demonstraion: () => import(/* webpackChunkName: "landing" */'../components/Demonstraion.vue'),
    Explaination: () => import(/* webpackChunkName: "landing" */'../components/Explaination.vue')
  },
  mounted () {
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
