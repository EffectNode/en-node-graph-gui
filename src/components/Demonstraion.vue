<template>
<div class="demo-area">
  <img v-if="!showDemo" class="demo-pic" src="../assets/screenshot/home.png" alt="iGraph by Effect Node" title="iGraph by Effect Node">
  <iframe v-if="showDemo" class="iframe" src="/demo" frameborder="0"></iframe>
  <div v-if="showDemo" class="caption-go">
    <router-link to="/demo">Go Full Screen</router-link>
    Woop Woop!
  </div>
  <div v-if="!showDemo" class="caption-go">
    Try it on a desktop! 🥰 No login required.
  </div>
</div>
</template>

<script>
export default {
  components: {
    // ExecDemo: () => import(/* webpackChunkName: "igraph-demo" */'../views/ExecDemo.vue')
  },
  data () {
    return {
      showDemo: false,
      stopFrame: false
    }
  },
  mounted () {
    let sizer = () => {
      this.showDemo = window.innerWidth > 1023
    }
    sizer()
    window.addEventListener('resize', sizer)
  }
}
</script>

<style scoped>
.demo-area{
  width: 100%;
  background-color: #000000;
  margin-top: 20px;
  margin-bottom: calc(20px + 50px);
  color: white;
}
.demo-pic{
  display: block;
  width: calc(100% - 20px * 2.0);
  max-width: 1280px;
  margin: auto auto;
  border-radius: 5px;
  border: rgb(43, 35, 15) solid 1px;
  box-shadow: 0px 0px 30px 0px rgb(43, 35, 15);
}
.iframe{
  display: block;
  width: calc(100% - 20px * 2.0);
  max-width: 1280px;
  height: calc(767px - 40px);
  margin: auto auto;
  border-radius: 5px;
  border: rgb(43, 35, 15) solid 1px;
  box-shadow: 0px 0px 30px 0px rgb(43, 35, 15);
}
@media screen and (min-width: 1280px) {
  .iframe{
    height: calc(800px - 20px * 2);
  }
}
.caption-go{
  width: calc(100% - 20px * 2.0);
  max-width: 1280px;
  margin: 10px auto;
  text-align: left;
}
.caption-go a,
.caption-go a:hover,
.caption-go a:active,
.caption-go a:visited {
  color: white
}
</style>
