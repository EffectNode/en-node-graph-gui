<template>
  <div class="auth-area">

    <div class="row">
      <div class="cute-10-phone cute-1-phone-offset cute-3-tablet-offset left cute-6-tablet">
        <div class="login-box-wrap">
          <div class="login-box-margin">

            <div class="login-title">
              Register
            </div>
            <div class="row">
              <div class="cute-4-tablet">
                Username
              </div>
              <div class="cute-8-tablet">
                <input class="textinput" type="text" v-model="auth.username">
              </div>
            </div>
            <div class="row">
              <div class="cute-4-tablet">
                Email
              </div>
              <div class="cute-8-tablet">
                <input class="textinput" type="email" v-model="auth.email">
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
                <button class="auth-btn" @click="submit">Register</button>
              </div>
            </div>
            <!-- Submit -->
          </div>
        </div>

        <!-- Border -->

      </div>
    </div>

    <div class="row">
      <div :style="{ color: tryLogin ? 'skyblue' : 'red' }" class="red center-text cute-10-phone cute-1-phone-offset cute-3-tablet-offset left cute-6-tablet">
        {{ errmsg }}
      </div>
    </div>
    <div class="row">
      <div class="center-text cute-10-phone cute-1-phone-offset cute-3-tablet-offset left cute-6-tablet">
        Switch to <router-link to="/login">Login</router-link>
      </div>
    </div>

  </div>
</template>

<script>
import * as API from '../api/api.js'
export default {
  data () {
    return {
      tryLogin: false,
      errmsg: '',
      auth: {
        email: '',
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submit () {
      this.tryLogin = false
      let { username, email, password } = this.auth
      API.register({ username, email, password })
        .then(() => {
          this.auth = {
            email: '',
            username: '',
            password: ''
          }
          this.$emit('ok')
          console.log('ok')
        }, (err) => {
          this.errmsg = err.message
          if (err.message[0] && typeof err.message === 'object') {
            this.errmsg = err.message[0]
          }
          if (this.errmsg === 'Email is already taken.') {
            this.tryLogin = true
            this.errmsg = 'Email is already taken, Trying to login you in instead...'
            API.login(this.auth)
              .then(() => {
                this.errmsg = ''
                this.$emit('ok')
                window.alert(`You're already registerd. Welcome Back!`)
              })
          }
          console.log(err.message)
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
