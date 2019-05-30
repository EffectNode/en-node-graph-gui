<template>
  <div>
    <UILogout @ok="$router.push('/')"></UILogout>
  </div>
</template>

<script>
export default {
  components: {
    UILogout: () => import(/* webpackChunkName: "landing" */ '../auth/UILogout.vue')
  }
}
</script>

<style>

</style>
