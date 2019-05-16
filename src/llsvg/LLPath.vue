<template>
  <path class="path" :style="getStyle()" :d="getFromNode(a, b)" fill="none" :marker-start="`url(#${uniq}circle-ready)`" :marker-mid="`url(#${uniq}square)`" :marker-end="`url(#${uniq}circle-ready)`" ></path>
</template>

<script>
export default {
  props: {
    uniq: {}
  },
  data () {
    return {
      running: true,
      a: {
        voltage: 10,
        rect: {
          x: 50,
          y: 50,
          w: 1,
          h: 1,
          stroke: ``,
          fill: `lime`
        },
        marker: {
          stroke: ``,
          fill: `green`
        }
      },
      b: {
        voltage: 5,
        rect: {
          x: 200,
          y: 10,
          w: 1,
          h: 1,
          stroke: ``,
          fill: `lime`
        },
        marker: {
          stroke: ``,
          fill: `green`
        }
      }
    }
  },
  methods: {
    getStyle () {
      return {
        'stroke': '#ff0000', // `url(#${this.uniq}kale-salad)`,
        'stroke-dasharray': this.running ? '2px' : '0px',
        'animation-play-state': this.running ? 'running' : 'paused',
        'animation-direction': this.a.voltage > this.b.voltage ? `normal` : `reverse`
      }
    },
    getFromNode (a, b) {
      return this.getFromCenter(a, b)
      // if (a.x < b.x) {
      //   return this.getFromNodeLeftToRight(a, b)
      // } else if (a.y < b.y) {
      //   return this.getFromNodeUpToDown(a, b)
      // }
    },
    getFromCenter (a, b) {
      // console.log(a, b)
      let ax = a.rect.x + a.rect.w / 2
      let ay = a.rect.y + a.rect.h / 2
      let bx = b.rect.x + b.rect.w / 2
      let by = b.rect.y + b.rect.h / 2

      return `
        M ${ax},${ay}
        C ${ax},${(ay + by) / 2}
          ${bx},${(ay + by) / 2}
          ${bx},${by}
      `
    }
  }
}
</script>

<style scoped>
@keyframes dash {
  to {
    stroke-dashoffset: 1000;
  }
}

.path {
  animation: dash 30s linear infinite;
  animation-play-state: paused;
  stroke-dasharray: 8;
}
</style>
