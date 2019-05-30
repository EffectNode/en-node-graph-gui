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
    <div class="ll-menu-nav" :class="{ 'open': open }">

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
        // {
        //   label: 'Login',
        //   class: { 'll-in-desktop-only': true },
        //   action: () => {
        //     this.$router.push({
        //       path: '/login'
        //     })
        //   }
        // },
        // {
        //   label: 'Register',
        //   class: { 'll-in-desktop-only': true },
        //   action: () => {
        //     this.$router.push({
        //       path: '/register'
        //     })
        //   }
        // },
        // {
        //   label: 'Menu',
        //   class: { 'll-in-mobile-only': true },
        //   action: () => {
        //     this.open = !this.open
        //   }
        // }
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
  background-color: rgba(0, 0, 0, 0.85);
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
</style>
