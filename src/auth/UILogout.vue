<template>
  <div class="auth-btn" @click="logout()">
    Logout
  </div>
</template>

<script>
import * as API from '../api/api.js'
export default {
  methods: {
    logout () {
      API.logout()
      this.$emit('ok')
    }
  }
}
</script>

<style scoped>
@import url(./auth.css);

</style>
