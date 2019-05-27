<template>
  <div id="enigma">
    <router-view />
  </div>
</template>

<style>
/* @font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 300;
  src: url("./assets/fonts/interui/Inter-Light-BETA.woff2") format("woff2"),
       url("./assets/fonts/interui/Inter-Light-BETA.woff") format("woff");
}

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 400;
  src: url("./assets/fonts/interui/Inter-Regular.woff2") format("woff2"),
       url("./assets/fonts/interui/Inter-Regular.woff") format("woff");
} */

body, html, #enigma, .full{
  width: 100%;
  height: 100%;
}
html{
}
body{
  margin: 0px;
}
#enigma {
  font-family: 'Nunito', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 200;
}

.btn-space{
  font-family: bebas-neue, sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
