<template>
<div class="box" :style="boxStyle" :class="{ full: full }" @click="order.splice(order.indexOf('preview'), 1); order.push('preview');">
  <div class="preview-box-title" ref="title" :style="titleStyle">
    <div class="title-text">
      <p>
        Preview Box
      </p>
    </div>
    <div class="title-cross">
      <img src="../icons/refresh.svg" @click="run()" alt="">
    </div>
    <div class="title-cross-left">
      <img v-if="full" src="../icons/fullscreen-restore.svg" @click="full = !full" alt="">
      <img v-if="!full" src="../icons/fullscreen-gofull.svg" @click="full = !full" alt="">
    </div>
  </div>
  <div class="preview-box-content" :style="contentStyle">
    <slot ref="slot"></slot>
  </div>
</div>
</template>

<script>
export default {
  props: {
    open: {},
    order: {}
  },
  data () {
    return {
      full: false,
      anchor: {
        x: 0 + 0 + 0,
        y: 0 + 0
      },
      boxStyle: {},
      titleStyle: {},
      contentStyle: {}
    }
  },
  watch: {
    full () {
      if (this.full) {
        this.$emit('addOnClose', () => {
          this.full = false
        })
      }
    }
  },
  mounted () {
    let sizer = () => {
      this.sync()
    }
    sizer()
    // this.handle()
    this.$on('move', ({ dx, dy }) => {
      this.anchor.x -= dx
      this.anchor.y -= -dy
      this.sync()
    })
    window.addEventListener('resize', sizer)
  },
  methods: {
    run () {
      this.$emit('run')
    },
    handle () {
      let h = {
        onMD: (evt) => {
          if (evt.touches && evt.touches[0]) {
            evt.preventDefault()
            h.tsx = evt.touches[0].pageX
            h.tsy = evt.touches[0].pageY
          }
          this.isDown = true
        },
        onMM: (evt) => {
          if (evt.touches && evt.touches[0]) {
            evt.preventDefault()
            h.dx = evt.touches[0].pageX - h.tsx
            h.dy = evt.touches[0].pageY - h.tsy
            h.tsx = evt.touches[0].pageX
            h.tsy = evt.touches[0].pageY
            if (this.isDown) {
              this.$emit('move', {
                dx: h.dx,
                dy: h.dy
              })
            }
            return
          }
          if (this.isDown) {
            this.$emit('move', {
              dx: evt.movementX,
              dy: evt.movementY
            })
            // console.log(evt)
          }
        },
        onMUClick: () => {
        },
        onMU: (evt) => {
          this.isDown = false
        }
      }
      // console.log(this)
      this.$refs['title'].addEventListener('touchstart', h.onMD, false)
      this.$refs['title'].addEventListener('touchend', h.onMU, false)
      window.addEventListener('touchmove', h.onMM, false)
      window.addEventListener('touchcancel', h.onMU, false)

      this.$refs['title'].addEventListener('mousedown', h.onMD, false)
      window.addEventListener('mouseup', h.onMU, false)
      window.addEventListener('mousemove', h.onMM, false)
      window.addEventListener('mouseleave', h.onMU, false)
      this.$refs['title'].addEventListener('mouseleave', h.onMUClick, false)
      this.clean = () => {
        this.$refs['title'].removeEventListener('mousedown', h.onMD)
        window.removeEventListener('mouseup', h.onMU)
        window.removeEventListener('mousemove', h.onMM)
        window.removeEventListener('mouseleave', h.onMU)
        this.$refs['title'].removeEventListener('mouseleave', h.onMUClick)
      }
    },
    sync () {
      if (window.innerWidth > 767) {
        this.boxStyle = {
          position: 'absolute',
          top: `${this.anchor.y}px`,
          right: `${this.anchor.x}px`
        }
        this.titleStyle = {
        }
        this.contentStyle = {
        }
      } else {
        this.boxStyle = {
          position: 'absolute',
          bottom: `0px`,
          left: `0px`,
          width: `100%`,
          height: `40%`
        }
        this.titleStyle = {
          display: `none`
        }
        this.contentStyle = {
          height: `100%`
        }
      }
    }
  }
}
</script>

<style scoped>
.box{
  width: calc(320px);
  height: calc(320px * 1.0 + 45px);

  /* border: #7a7a7a solid 1px; */
  box-sizing: border-box;
  /* box-shadow: 0px 5px 30px 0px #c7c7c7; */
  box-sizing: border-box;
  border-left: #474747 solid 1px;
  z-index: 10;
  background: white;
}
.box.full{
  width: calc(100%);
  height: calc(100%);
  border: none;
}

/* @media screen and (min-width: 1441px) {
  .box{
    width: 400px;
    height: calc(400px * 1.0 + 45px);
  }
} */

.preview-box-title{
  /* border-radius: calc(45px / 2) calc(45px / 2) 0px 0px; */
  position: relative;
  height: 45px;
  color: white;
  background-color: #474747;
}
.title-text{
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  /* cursor: move; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.title-text p{
  font-weight: bolder;
}

.title-cross{
  position: absolute;
  top: 0px;
  left: 0px;
  height: 45px;
  width: 45px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.title-cross-left{
  position: absolute;
  top: 0px;
  right: 0px;
  height: 45px;
  width: 45px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.title-cross-left img,
.title-cross img{
  cursor: pointer;
  /* border: black solid 5px; */
  /* border-radius: 959px; */
  /* padding: 7px; */
  width: 24px;
  height: 24px;
}
.preview-box-content{
  height: calc(100% - 45px);
  overflow: hidden;
}
</style>
