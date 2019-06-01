<template>
  <div class="auth-area">

    <div class="row">
      <div class="cute-10-phone cute-1-phone-offset cute-3-tablet-offset left cute-6-tablet">
        <div class="login-box-wrap">
          <div class="login-box-margin">
            <div class="login-title">
              Login
            </div>
            <div class="row">
              <div class="cute-4-tablet">
                Username or Email
              </div>
              <div class="cute-8-tablet">
                <input class="textinput" type="text" v-model="auth.email">
              </div>
            </div>
            <div class="row">
              <div class="cute-4-tablet">
                Password
              </div>
              <div class="cute-8-tablet">
                <input class="textinput" type="password" v-model="auth.password">
              </div>
            </div>

            <div class="row">
              <div class="cute-4-tablet">
                Submit
              </div>
              <div class="cute-8-tablet">
                <button class="auth-btn" @click="submit">Login</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="row">
      <div class="red center-text cute-10-phone cute-1-phone-offset cute-3-tablet-offset left cute-6-tablet">
        {{ errmsg }}
      </div>
    </div>
    <div class="row">
      <div class="center-text cute-10-phone cute-1-phone-offset cute-3-tablet-offset left cute-6-tablet">
        Switch to <router-link :to="getRegistration()">Register</router-link>
      </div>
    </div>

  </div>
</template>

<script>
import * as API from '../api/api.js'
export default {
  data () {
    return {
      errmsg: '',
      auth: {
        email: '',
        password: ''
      }
    }
  },
  mounted () {
  },
  methods: {
    getRegistration () {
      let redir = ''
      if (this.$route.query && this.$route.query.redirect) {
        redir = `?redirect=${this.$route.query.redirect}`
      }
      let link = `/register${redir}`
      return link
    },
    submit () {
      this.errmsg = ''
      API.login({ ...this.auth })
        .then(() => {
          this.auth = {
            email: '',
            password: ''
          }
          this.$emit('ok')
          console.log('ok')
        }, (err) => {
          this.errmsg = err.message
          console.log(err.message)
          if (err.message[0] && typeof err.message[0] !== 'string') {
            this.errmsg = err.message[0]
          }
          this.$emit('bad')
          console.log('bad', this.errmsg)
        })
    }
  }
}
</script>

<style scoped>
@import url(./auth.css);
</style>
