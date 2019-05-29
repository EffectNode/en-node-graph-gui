<template>
  <div class="oo-container">
    <div class="oo-section-title">
      <h1>
        Essential Example
      </h1>
      <h2>
        How to make my own scene and direct it with timeline?
      </h2>
    </div>
    <div class="oo-row">
      <div class="oo-div">
        <div class="oo-wrap">
          <div class="oo-content">
            <div class="oo-content-image" :style="{ backgroundImage: `url(${require('../assets/screenshot/add-scene.png')})` }"></div>
            <div class="oo-content-title">
              1. Click "Scenes"
            </div>
            <div class="oo-content-body">
              Every App has multiple scene supported. Click the "Scenes" to add more scene
            </div>
          </div>
        </div>
      </div>
      <!-- Scene -->

      <div class="oo-div">
        <div class="oo-wrap">
          <div class="oo-content">
            <div class="oo-content-image" :style="{ backgroundImage: `url(${require('../assets/screenshot/inspector.png')})` }"></div>
            <div class="oo-content-title">
              2. Go To Inspector
            </div>
            <div class="oo-content-body">
              We can use Inspector to add Example Items. It's at the screen's bottom left hand corner.
            </div>
          </div>
        </div>
      </div>
      <!-- Inspector -->

      <div class="oo-div">
        <div class="oo-wrap">
          <div class="oo-content">
            <div class="oo-content-image" :style="{ backgroundImage: `url(${require('../assets/screenshot/addScene.png')})` }"></div>
            <div class="oo-content-title">
              3. Click "+ Scene"
            </div>
            <div class="oo-content-body">
              After clicking + Scene, please click the newly added Scene Ball
            </div>
          </div>
        </div>
      </div>
      <!-- Scene -->

      <div class="oo-div">
        <div class="oo-wrap">
          <div class="oo-content">
            <div class="oo-content-image" :style="{ backgroundImage: `url(${require('../assets/screenshot/clickNewScene.png')})` }"></div>
            <div class="oo-content-title">
              4. Click the new "Scene"
            </div>
            <div class="oo-content-body">
              You can select it by clicking it in the balls area.
            </div>
          </div>
        </div>
      </div>
      <!-- Ball -->

      <div class="oo-div">
        <div class="oo-wrap">
          <div class="oo-content">
            <div class="oo-content-image" :style="{ backgroundImage: `url(${require('../assets/screenshot/editSceneTitle.png')})` }"></div>
            <div class="oo-content-title">
              5. Change Title
            </div>
            <div class="oo-content-body">
              Change title to "My New Scene" Please make sure the text is case sensitive, capital and lower letter are different.
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
              6. Click "+ Sample Ball"
            </div>
            <div class="oo-content-body">
              You can click the Sample Ball.
            </div>
          </div>
        </div>
      </div>
      <!-- Ball -->

      <div class="oo-div">
        <div class="oo-wrap">
          <div class="oo-content">
            <div class="oo-content-image" :style="{ backgroundImage: `url(${require('../assets/screenshot/addTimeTrack.png')})` }"></div>
            <div class="oo-content-title">
              7. Add "Timeline Track"
            </div>
            <div class="oo-content-body">
              You can click that button to add a timeline track for your new scene.
            </div>
          </div>
        </div>
      </div>
      <!-- Ball -->

      <div class="oo-div">
        <div class="oo-wrap">
          <div class="oo-content">
            <div class="oo-content-image" :style="{ backgroundImage: `url(${require('../assets/screenshot/renameTrack.png')})` }"></div>
            <div class="oo-content-title">
              8. Rename Timeline Track
            </div>
            <div class="oo-content-body">
              Rename the timeline track to "My New Scene". You can just copy and paste the title inside the newly added Scene in step 5.
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
              9. Done!
            </div>
            <div class="oo-content-body">
              You just created a new scene with a new item.
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

.oo-content-title{
  border-top: white solid 1px;
}
</style>
