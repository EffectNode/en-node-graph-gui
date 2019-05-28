<template>
<div class="demo-area">
  <img class="demo-pic" src="../assets/screenshot/home.png" alt="iGraph by Effect Node" title="iGraph by Effect Node">
  <iframe class="iframe" src="/demo" frameborder="0"></iframe>
</div>
</template>

<script>
export default {
  components: {
    // ExecDemo: () => import(/* webpackChunkName: "igraph-demo" */'../views/ExecDemo.vue')
  },
  data () {
    return {
      showDemoEdit: false,
      stopFrame: false
    }
  },
  mounted () {
    let sizer = () => {
      this.showDemoEdit = window.innerWidth > 1023
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
  margin-bottom: 20px;
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
  display: none;
}

@media screen and (min-width: 767px) {
  .demo-pic{
    display: none;
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
}

@media screen and (min-width: 1280px) {
  .iframe{
    height: calc(800px - 20px * 2);
  }
}
</style>
