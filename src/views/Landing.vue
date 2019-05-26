<template>
  <div>
    123
    <router-link to="/demo">Go Full Page</router-link>
    <iframe v-if="showFrame" src="/demo" :class="{ stop: stopFrame }" class="demo-portal" frameborder="0" @load="stopFrame = true"></iframe>

  </div>
</template>

<script>
export default {
  data () {
    return {
      showFrame: true,
      stopFrame: false
    }
  }
}
</script>

<style scoped>
.demo-portal{
  display: none;
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
  .demo-portal{
    background-image: linear-gradient(90deg, #212121, #474747, #212121);
    background-size: 400% 100%;
    animation: bgMove 1.5s linear 0s infinite reverse both;
    box-sizing: border-box;
    border: #474747 solid 1px;
    display: block;
    width: calc(100% - 40px);
    max-width: 1280px;
    height: 800px;
    border-radius: 5px;
    box-shadow: 0px 20px 30px 0px #d8d8d8;
  }
  .demo-portal.stop{
    animation-play-state: paused;
  }
}
</style>
