<template>
  <div class="auth">
    <StickyNav :override="[]"></StickyNav>
    <UIRegister @ok="$router.push('/myhome');"></UIRegister>
  </div>
</template>

<script>
import * as API from '../api/api.js'
export default {
  components: {
    UIRegister: () => import(/* webpackChunkName: "landing" */ '../auth/UIRegister.vue'),
    StickyNav: () => import(/* webpackChunkName: "landing" */ '../components/StickyNav.vue')
  },
  async beforeRouteEnter (to, from, next) {
    if (API.check() && await API.getMyself()) {
      next('/myhome')
    } else {
      next()
    }
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
