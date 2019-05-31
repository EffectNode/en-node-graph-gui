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
          <div class="ll-nav-item" :key="item.label" :class="item.class" v-for="item in items" @click="item.action()">
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
        <div class="ll-menu-item" :key="item.label + 'sticky'" v-for="item in items.filter(f => !f.noMenu)">
          <div class="word"  @click="item.action()">
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
          label: 'Github',
          class: {
            'll-in-desktop-only': true
          },
          action: () => {
            window.location.assign('https://github.com/EffectNode/en-node-graph-gui')
          }
        },
        {
          label: 'My Home',
          class: { 'll-in-desktop-only': true },
          action: () => {
            this.$router.push({
              path: '/myhome'
            })
          }
        },
        {
          noMenu: this.$route.path === '/login',
          label: 'Login',
          class: { 'll-in-desktop-only': true },
          action: () => {
            this.$router.push({
              path: '/login'
            })
          }
        },
        {
          noMenu: this.$route.path === '/register',
          label: 'Register',
          class: { 'll-in-desktop-only': true },
          action: () => {
            this.$router.push({
              path: '/register'
            })
          }
        },
        {
          noMenu: true,
          label: 'Menu',
          class: { 'll-in-mobile-only': false },
          action: () => {
            this.open = !this.open
          }
        }
      ]
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
  background-color: rgba(201, 120, 120, 0.925);
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
  border-radius: 50px;
  box-shadow: 0px 0px 20px 0px rgb(0, 0, 0);
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
