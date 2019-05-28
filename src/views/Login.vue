<template>
  <div class="auth">
    <StickyNav :override="[]"></StickyNav>
  </div>
</template>

<script>
export default {
  components: {
    StickyNav: () => import('../components/StickyNav.vue')
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
