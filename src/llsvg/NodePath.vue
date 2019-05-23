<template>
  <path class="path" :style="getStyle()" :d="getFromNode(a, b)" fill="none" :marker-start="`url(#${uniq}circle-ready)`" :marker-mid="`url(#${uniq}square)`" :marker-end="`url(#${uniq}circle-ready)`" ></path>
</template>

<script>
export default {
  props: {
    open: {},
    link: {},
    uniq: {}
  },
  data () {
    return {
      running: true,
      dashed: true,
      stroke: '#ff0000',
      a: {
        voltage: 10,
        rect: {
          x: 0,
          y: 0,
          w: 60,
          h: 60
        },
        marker: {
          stroke: ``,
          fill: `green`
        }
      },
      b: {
        voltage: 5,
        rect: {
          x: 100,
          y: 100,
          w: 60,
          h: 60
        },
        marker: {
          stroke: ``,
          fill: `green`
        }
      }
    }
  },
  watch: {
    link: {
      deep: true,
      handler () {
        // mobile
        this.running = false
        this.dashed = false
        this.stroke = `url(#${this.uniq}rainbow-gradient-path)`

        // desktop
        if (window.innerWidth > 767) {
          this.running = this.link.running
          this.dashed = this.link.dashed
          if (this.open && this.open.coder) {
            this.stroke = 'rgba(255,255,255,0.35)'
          } else if (!this.dashed) {
            this.stroke = 'rgba(255,255,255,0.35)'
          } else {
            this.stroke = `url(#${this.uniq}rainbow-gradient-path)`
          }
        }

        this.a.rect.x = this.link.fromPos.x
        this.a.rect.y = this.link.fromPos.y

        this.b.rect.x = this.link.toPos.x
        this.b.rect.y = this.link.toPos.y
        // this.$forceUpdate()
      }
    }
  },
  methods: {
    getStyle () {
      return {
        'stroke': this.stroke, // `url(#${this.uniq}kale-salad)`,
        'stroke-dasharray': this.dashed ? '2.5px' : '0px',
        'animation-play-state': this.running ? 'running' : 'paused',
        'animation-direction': this.a.voltage > this.b.voltage ? `normal` : `reverse`
      }
    },
    getFromNode (a, b) {
      // return this.getFromCenter(a, b)
      return this.getFromLeftToRight(a, b)
      // if (a.x < b.x) {
      //   return this.getFromNodeLeftToRight(a, b)
      // } else if (a.y < b.y) {
      //   return this.getFromNodeUpToDown(a, b)
      // }
    },
    getFromLeftToRight (a, b) {
      // console.log(a, b)
      // let ax = a.rect.x + a.rect.w / 2 + 0.01
      // let ay = a.rect.y + a.rect.h / 2 + 0.01
      // let bx = b.rect.x + b.rect.w / 2
      // let by = b.rect.y + b.rect.h / 2

      let ax = a.rect.x // + a.rect.w / 2 + 0.01
      let ay = a.rect.y + a.rect.h / 2 + 0.01
      let bx = b.rect.x + b.rect.w // / 2
      let by = b.rect.y + b.rect.h / 2

      return `
        M ${ax},${ay}
        C ${(ax + bx) / 2},${ay}
          ${(ax + bx) / 2},${by}
          ${bx},${by}
      `
    }
    // getFromTopToDown (a, b) {
    //   // console.log(a, b)
    //   let ax = a.rect.x + a.rect.w / 2 + 0.01
    //   let ay = a.rect.y + a.rect.h / 2 + 0.01
    //   let bx = b.rect.x + b.rect.w / 2
    //   let by = b.rect.y + b.rect.h / 2

    //   return `
    //     M ${ax},${ay}
    //     C ${ax},${(ay + by) / 2}
    //       ${bx},${(ay + by) / 2}
    //       ${bx},${by}
    //   `
    // },
    // getFromNodeLeftToRight (a, b) {
    //   let ax = a.rect.x + a.rect.w + 0.01
    //   let ay = a.rect.y + a.rect.h / 2 + 0.01

    //   let bx = b.rect.x // + b.rect.w / 2
    //   let by = b.rect.y + b.rect.h / 2

    //   return `
    //     M ${ax},${ay}
    //     C ${ax},${(ay + by) / 2}
    //       ${bx},${(ay + by) / 2}
    //       ${bx},${by}
    //   `
    // }
  }
}
</script>

<style scoped>
@keyframes dash {
  to {
    stroke-dashoffset: -1000;
  }
}

.path {
  animation: dash 30s linear infinite;
  animation-play-state: paused;
  stroke-dasharray: 8;
}
</style>
