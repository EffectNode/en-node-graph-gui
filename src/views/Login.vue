<template>
  <div class="auth">
    <StickyNav at="auth"></StickyNav>
    <UILogin @ok="onOK"></UILogin>
  </div>
</template>

<script>
// import * as API from '../api/api.js'
export default {
  components: {
    UILogin: () => import(/* webpackChunkName: "landing" */ '../auth/UILogin.vue'),
    StickyNav: () => import(/* webpackChunkName: "landing" */ '../components/StickyNav.vue')
  },
  mounted () {
    document.body.style.backgroundColor = 'black'
  },
  beforeDestroy () {
    document.body.style.backgroundColor = 'unset'
  },
  methods: {
    onOK () {
      if (this.$route.query && this.$route.query.redirect) {
        this.$router.push(this.$route.query.redirect)
      } else {
        this.$router.push('/myhome')
      }
    }
  }
}
</script>

<style scoped>
.auth{
  background-color: black;
  color: white;
}
</style>
