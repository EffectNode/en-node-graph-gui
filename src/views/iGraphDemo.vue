<template>
  <div class="full">
    <iGraph v-if="water" :initWater="water"></iGraph>
  </div>
</template>

<script>
export default {
  components: {
    iGraph: () => import(/* webpackChunkName: "igraph" */'./iGraph.vue')
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
      let water = await import(/* webpackChunkName: "igraph-demo" */'../llui/water/water-03.json')
      this.water = water.default

      if (process.env.NODE_ENV === 'development') {
        let waterStr = localStorage.getItem('water-OMGOMG')
        if (waterStr) {
          try {
            let water = JSON.parse(waterStr)
            this.water = water
          } catch (e) {
            console.log(e)
          }
        } else {

        }
        // apple //
        this.autoSaveTimer = setInterval(() => {
          console.log('.... saving .....')
          localStorage.setItem('water-OMGOMG', JSON.stringify(window.getWater()))
        }, 2000)
        // orange //
      }
    }
  },
  beforeDestroy () {
    clearInterval(this.autoSaveTimer)
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
