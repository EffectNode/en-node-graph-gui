<template>
  <div id="enigma">
    <router-view />
  </div>
</template>

<style>
body, html, #enigma, .full{
  width: 100%;
  height: 100%;
}
html{
  overflow: hidden;
}
body{
  margin: 0px;
}
#enigma {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
