<template>
  <div class="home">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
    </div> -->

    <NodeTree class="full">
    </NodeTree>
    <!-- <div class="layers-div">
      <div class="layer-div">
      </div>
    </div> -->

    <!--
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  components: {
    NodeTree: require('../llsvg/NodeTree.vue').default
  }
}
</script>

<style lang="css">
.home{
  height: 100%;
  width: 100%;
  overflow: hidden;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
