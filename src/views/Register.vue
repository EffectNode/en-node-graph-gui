<template>
  <div class="auth">
    <StickyNav at="auth"></StickyNav>
    <UIRegister @ok="$router.push('/myhome');"></UIRegister>
  </div>
</template>

<script>
export default {
  components: {
    UIRegister: () => import(/* webpackChunkName: "landing" */ '../auth/UIRegister.vue'),
    StickyNav: () => import(/* webpackChunkName: "landing" */ '../components/StickyNav.vue')
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
.auth{
  background-color: black;
  color: white;
}
</style>
