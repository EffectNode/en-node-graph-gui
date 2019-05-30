<template>
  <div class="auth">
    <StickyNav :override="[]"></StickyNav>
    <UILogin @ok="$router.push('/myhome');"></UILogin>
  </div>
</template>

<script>
import * as API from '../api/api.js'
export default {
  components: {
    UILogin: () => import(/* webpackChunkName: "landing" */ '../auth/UILogin.vue'),
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
