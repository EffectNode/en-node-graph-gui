<template>
  <div class="landing">
    <section>
      <div class="welcome">
        <h1>
          Welcome to iGraph.effectnode.com
        </h1>
      </div>
    </section>

    <div class="demo-area">

      <iframe v-if="showDemoEdit" src="/demo" :class="{ stop: stopFrame }" class="demo-instance" frameborder="0" @load="stopFrame = true"></iframe>

      <div v-if="!showDemoEdit" class="demo-instance" :class="{ stop: stopFrame }">
        <ExecDemo @load="stopFrame = true"></ExecDemo>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  components: {
    ExecDemo: () => import(/* webpackChunkName: "igraph-demo" */'./ExecDemo.vue')
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
.landing{
  width: 100%;
  height: 100%;
}
.demo-area{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.demo-instance{
  border: #524d20 solid 1px;
  border-radius: 5px;
  width: calc(100% - 20px * 2.0);
  height: calc(100% - 20px * 2.0);
}

@keyframes bgMove {
  0%{
    background-position-x: 0%;
  }
  100%{
    background-position-x: 400%;
  }
}

@media screen and (min-width: 1023px) {
  .demo-area{
    display: flex;
    justify-content: center;
  }
  .demo-instance{
    margin: auto auto;
    width: calc(100% - 40px * 2.0);
    max-width: 1280px;
    height: calc(100% - 40px);
    max-height: 800px;

    background-image: linear-gradient(90deg, #212121, #474747, #212121);
    background-size: 400% 100%;
    animation: bgMove 1.5s linear 0s infinite reverse both;
    box-sizing: border-box;
    border: #474747 solid 1px;
    display: block;
    border-radius: 5px;
    box-shadow: 0px 20px 30px 0px #d8d8d8;
  }
  .demo-instance.stop{
    animation-play-state: paused;
    border: #524d20 solid 1px;
    background-image: linear-gradient(white, white);
  }
}
.computer{

}
</style>
