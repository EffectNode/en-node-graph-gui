<template>
  <div>
    <div class="marginer hero-into">
      Simple Cinematic Graphics Editor
    </div>
    <div class="sub-title">
      Multiple Scenes and Cameras.
    </div>
    <div class="sub-sub-title">
      Made for Web.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.hero-into{
  text-align: center;
  font-size: 22px;
  color: white;
  margin: 0px 25px;
}

.sub-title{
  color: white;
  text-align: center;
  font-size: 18px
}
.sub-sub-title{
  color: white;
  text-align: center;
  font-size: 16px;
}
@media screen and (min-width: 767px) {
  .hero-into{
    font-size: 50px;
  }
  .sub-title{
    font-size: 30px;
  }
  .sub-sub-title{
    font-size: 20px;
  }
}
</style>
