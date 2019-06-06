<template>
  <div class="ll-welcome-section">
    <div class="ll-row">
      <div class="ll-nav-left">
        <div class="ll-welcome-msg">
          <router-link to="/">
            <img class="ll-logo-mobile ll-in-mobile-only" src="../assets/logo/igraph-only.svg" title="iGraph by EffectNode.com" alt="iGraph by EffectNode.com">
            <img class="ll-logo-desktop ll-in-desktop-only" src="../assets/logo/igraph.svg" title="iGraph by EffectNode.com" alt="iGraph by EffectNode.com">
          </router-link>
        </div>
      </div>
      <div class="ll-nav-right">
        <div class="ll-nav-list">
          <div class="ll-nav-item" v-show="item.show({ at, isTop: true, isMenu: false })" :key="item.label" :class="item.class" v-for="item in items" @click="item.action()">
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>
    <div class="ll-menu-nav-closer" :class="{ 'open': open }" @click="open = false"></div>
    <div class="ll-menu-nav" :class="{ 'open': open }">
      <div class="ll-menu-v-list">
        <div class="ll-menu-item title">
          Menu
        </div>
        <div class="ll-menu-item" v-show="item.show({ at, isTop: false, isMenu: true })" :key="item.label + 'sticky'" v-for="item in items">
          <div class="word"  @click="item.action()">
            {{ item.label }}
          </div>
        </div>
        <!-- <div class="ll-menu-item" v-if="at === 'secure'">
          <div class="word" @click="logout">
            Logout
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import * as API from '../api/api.js'

export default {
  props: {
    at: {
      default: 'unknown'
    },
    override: {
    },
    sticky: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    open () {
      if (this.open) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'unset'
      }
    }
  },
  data () {
    return {
      open: false,
      items: [
        {
          label: 'Home',
          show: ({ isMenu }) => isMenu,
          class: { 'll-in-desktop-only': true },
          action: () => {
            this.open = false
            this.$router.push({
              path: '/'
            })
          }
        },
        {
          label: 'Github',
          show: () => true,
          class: {
            'll-in-desktop-only': true
          },
          action: () => {
            this.open = false
            window.open('https://github.com/EffectNode/en-node-graph-gui')
          }
        },

        {
          label: 'Contact',
          show: () => true,
          class: {
            'll-in-desktop-only': true
          },
          action: () => {
            this.open = false
            window.open('https://twitter.com/wonglok831')
          }
        },

        {
          label: 'My Projects',
          show: ({ isMenu }) => isMenu,
          class: { 'll-in-desktop-only': true },
          action: () => {
            this.open = false
            this.$router.push({
              path: '/myhome'
            })
          }
        },
        {
          show: () => this.at !== 'secure',
          label: 'Login',
          class: { 'll-in-desktop-only': true },
          action: () => {
            this.open = false
            this.$router.push({
              path: '/login'
            })
          }
        },
        {
          show: () => this.at !== 'secure',
          label: 'Register',
          class: { 'll-in-desktop-only': true },
          action: () => {
            this.open = false
            this.$router.push({
              path: '/register'
            })
          }
        },
        {
          show: ({ isMenu }) => this.at === 'secure',
          hideTop: true,
          label: 'Logout',
          class: {},
          action: () => {
            this.open = false
            this.logout()
          }
        },
        {
          show: ({ isTop }) => isTop,
          notFullScreenMenu: true,
          label: 'Menu',
          class: {},
          action: () => {
            this.open = false
            this.open = !this.open
          }
        }
      ]
    }
  },
  methods: {
    logout () {
      API.logout()
      this.$router.push('/')
    }
  },
  mounted () {
    this.items = this.override || this.items
  }
}
</script>

<style scoped>
.ll-menu-nav{
  display: none;
}
.ll-menu-nav.open{
  display: block;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.925);
  z-index: 10;
}
.ll-menu-nav-closer{
  display: none;
}
@keyframes zoomin {
  0%{
    transform: scale(0)
  }
  100%{
    transform: scale(1)
  }
}
@keyframes fadeinMove {
  0%{
    opacity: 0;
    transform: translateY(6px);
  }
  100%{
    opacity: 1;
    transform: translateY(0px);
  }
}
.ll-menu-nav-closer.open{
  cursor: pointer;
  display: block;
  position: absolute;
  animation: zoomin 0.3s 0s ease-in-out;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(172, 172, 172, 0.925);
  z-index: 11;
}
.ll-welcome-section{
  width: 100%;

  color: white;
  background-color: rgba(0,0,0,0.8);
  /* background-image: linear-gradient(black, transparent); */
}

.ll-welcome-msg{
  display: inline-block;
}
.ll-logo-mobile{
  margin: 20px;
  height: 40px;
}
.ll-logo-desktop{
  margin: 20px;
  height: 40px;
}
.ll-row{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/*
.ll-row{
  background: linear-gradient(lime, cyan, hotpink, cyan, lime);
  background-size: 100% 300%;
  background-position-x: 0%;
  background-position-y: 0%;
  transition: background-position 1s;
}
.ll-welcome-section:hover .ll-row{
  background-position-x: 400%;
  background-position-y: 400%;
} */

.ll-nav-list{
  margin: 20px;
  font-size: 18px;
}
.ll-nav-item{
  cursor: pointer;
  display: inline-block;
  margin: 0px 10px;
  text-decoration: underline;
  -webkit-tap-highlight-color: transparent;
}
.ll-in-mobile-only{
  display: inline-block;
}
@media screen and (min-width: 767px) {
  .ll-in-mobile-only{
    display: none;
  }
}
.ll-in-desktop-only{
  display: none;
}
@media screen and (min-width: 767px) {
  .ll-in-desktop-only{
    display: inline-block;
  }
}

.ll-menu-v-list{
}
.ll-menu-item{
  margin-bottom: 30px;
  font-size: 37px;
  height: calc(100% / 8);
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
  animation: fadeinMove 1.3s 0s ease-in-out;
}

.ll-menu-item.title{
  font-size: 60px;
  margin-top: 60px;
}

.ll-menu-item .word{
  display: inline-block;
  cursor: pointer;
}

.ll-menu-item .word:hover{
  margin: -1px 0px;
  border-bottom: white solid 1px;
  border-top: white solid 1px;
}

</style>
