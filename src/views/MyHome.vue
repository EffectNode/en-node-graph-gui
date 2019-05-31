<template>
  <div>
    <UILogout @ok="$router.push('/')"></UILogout>
    <EXEC v-if="water" :water="water"></EXEC>
  </div>
</template>

<script>
export default {
  components: {
    UILogout: () => import(/* webpackChunkName: "landing" */ '../auth/UILogout.vue'),
    EXEC: () => import(/* webpackChunkName: "myhome" */ '../llexec/EXEC.vue')
  },
  data () {
    return {
      water: false
    }
  }
}
</script>

<style>

</style>
