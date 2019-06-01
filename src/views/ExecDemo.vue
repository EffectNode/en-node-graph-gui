<template>
  <div class="full">
    <EXEC v-if="water" :water="water"></EXEC>
  </div>
</template>

<script>
export default {
  components: {
    EXEC: () => import(/* webpackChunkName: "igraph-core" */'../llexec/EXEC.vue')
  },
  data () {
    return {
      water: false
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    async load () {
      let water = await import(/* webpackChunkName: "igraph-demo" */'../llui/water/demo-page.json')
      this.water = water.default
      this.$emit('load', true)
    }
  },
  beforeDestroy () {
  }
}
</script>

<style scoped>
.smaller{
  height: 768px;
  max-width: 1280px;
  margin: 40px auto;
  border: #363636 solid 1px;;
}
</style>
