<template>
  <div id="enigma">
    <router-view />
  </div>
</template>

<style>
/* recylcebin, how do i add a new item */

/*
http://www.cutegrids.com/
*/
@import url('./cute/css/normalize.css');
@import url('./cute/css/cutegrids.css');

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
.outline{
  outline: red solid 1px;
}
</style>
