<template>
  <div class="auth">
    <StickyNav at="auth"></StickyNav>
    <UIRegister @ok="onOK"></UIRegister>
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
