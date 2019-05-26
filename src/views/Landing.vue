<template>
  <div>
    123
    <router-link to="/demo">Go Full Page</router-link>
    <iframe src="/demo" class="demo-portal" frameborder="0"></iframe>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.demo-portal{
  display: none;
}

@media screen and (min-width: 1023px) {
  .demo-portal{
    box-sizing: border-box;
    border: #212121 solid 1px;
    display: block;
    width: calc(100% - 40px);
    max-width: 1280px;
    height: 800px;
  }
}
</style>
