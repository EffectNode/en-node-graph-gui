<template>
  <div class="corner-layer">
    <div class="uit-icon" @click="$parent.$refs['editor'].goHome()">
      <img src="../icons/home.svg" title="home" alt="home">
    </div>
    <div class="uit-icon" @click="$parent.$refs['editor'].cleanLayout({ instant: false, goHome: false, resetZoom: true })">
      <img src="../icons/tree.svg" title="oraganise" alt="oraganise">
    </div>
    <div class="uit-icon" @click="$parent.$refs['editor'].toggleZoom()">
      <img src="../icons/magnify.svg" title="map view" alt="map view">
    </div>
    <!-- <div class="uit-icon" @click="$parent.$refs['editor'].zoomBa({ to: 1 })">
      <img src="../icons/magnify-add.svg" title="zoom in" alt="zoom in">
    </div> -->
    <!--
    <button @click="$refs['editor'].cleanLayout({ instant: false, goHome: true, resetZoom: true })">Home</button>
    <button @click="$refs['editor'].cleanLayout({ instant: false, goHome: false, resetZoom: true })">Organise</button>
    <button @click="$refs['editor'].zoomBa({ to: 4 })">Map View</button>
    <button @click="$refs['editor'].zoomBa({ to: 1 })">Normal</button> -->
  </div>
</template>

<script>
export default {

}
</script>

<style>
.corner-layer{
  position: absolute;
  top: 0px;
  right: 0px;
  width: calc(60px * 3);
  display: flex;
}
.uit-icon{
  display: inline-block;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.uit-icon img{
  width: 24px;
  height: 24px;
  padding: 7px;
  border-radius: 50%;
  border: black solid 5px;
  cursor: pointer;
}
</style>
