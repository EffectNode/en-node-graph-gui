<template>
  <div class="oo-container hide">
    <div class="oo-section-title">
      <h1>
        Essential How to...
      </h1>
    </div>

    <div class="oo-section-title">
      <h2>
        How do I add an item?
      </h2>
    </div>
    <div class="oo-row">
      <div class="oo-div">
        <div class="oo-wrap">
          <div class="oo-content">
            <div class="oo-content-image" :style="{ backgroundImage: `url(${require('../assets/screenshot/homscene.png')})` }"></div>
            <div class="oo-content-title">
              1. Click the "Home Scene"
            </div>
            <div class="oo-content-body">
              Home Scene is your first scene.
            </div>
          </div>
        </div>
      </div>
      <!-- Ball -->

      <div class="oo-div">
        <div class="oo-wrap">
          <div class="oo-content">
            <div class="oo-content-image" :style="{ backgroundImage: `url(${require('../assets/screenshot/addSampleBall.png')})` }"></div>
            <div class="oo-content-title">
              2. Click "+ Sample Ball"
            </div>
            <div class="oo-content-body">
              Go to "Inspector" box, scroll down to "Add Example Item" and then click "+ Sample Ball".
            </div>
          </div>
        </div>
      </div>
      <!-- Ball -->

      <div class="oo-div">
        <div class="oo-wrap">
          <div class="oo-content">
            <div class="oo-content-image" :style="{ backgroundImage: `url(${require('../assets/screenshot/done.png')})` }"></div>
            <div class="oo-content-title">
              3. Done!
            </div>
            <div class="oo-content-body">
              You just created a ball!
            </div>
          </div>
        </div>
      </div>
      <!-- Ball -->

    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url(./columns.css);
.oo-container.hide{
  display: none;
}
.oo-content-title{
  border-top: white solid 1px;
}
</style>
