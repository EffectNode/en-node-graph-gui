<template>
<div class="box" :style="boxStyle"  @click="order.splice(order.indexOf('timeline'), 1); order.push('timeline');">
  <!-- <div class="timleine-box-title" ref="title" :style="titleStyle">
    <div class="title-text">
      <p>
        Timleine
      </p>
    </div>
    <div class="title-cross" @click="$emit('close')" @touchend="$emit('close')">
      <img src="../icons/cross.svg" :style="corssStyle" alt="">
    </div>
  </div> -->
  <div class="timleine-box-content" :style="contentStyle">
    <slot>
    </slot>
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
      anchor: {
        // 10 = margin edge for preview box
        // 10 = margin for ui inspectpor
        x: 0,
        y: 0
      },

      boxStyle: {},
      titleStyle: {},
      contentStyle: {},
      corssStyle: {}
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

    // window.addEventListener('keydown', evt => {
    //   if (evt.keyCode === 27) {
    //     this.$emit('close')
    //   }
    // })

    window.dispatchEvent(new Event('en-timleine-layout'))
  },
  methods: {
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
          window.dispatchEvent(new Event('en-timleine-layout'))
          if (evt.touches && evt.touches[0]) {
            evt.preventDefault()
            h.dx = evt.touches[0].pageX - h.tsx
            h.dy = evt.touches[0].pageY - h.tsy
            h.tsx = evt.touches[0].pageX
            h.tsy = evt.touches[0].pageY
            if (this.isDown) {
              this.$emit('move', {
                dx: -h.dx,
                dy: -h.dy
              })
            }
            return
          }
          if (this.isDown) {
            this.$emit('move', {
              dx: -evt.movementX,
              dy: -evt.movementY
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
          bottom: `${this.anchor.y}px`,
          left: `${this.anchor.x}px`
        }
        this.titleStyle = {
        }

        this.contentStyle = {
        }
      } else {
        this.boxStyle = {
          display: 'none',
          position: 'absolute',
          bottom: `0px`,
          left: `0px`
          // width: `100%`,
          // height: `60%`
        }
        this.titleStyle = {
          // display: `none`
        }
        this.contentStyle = {
          // height: `100%`
        }
      }
    }
  }
}
</script>

<style scoped>
.box{
  /* border-radius: calc(30px / 2) calc(30px / 2) calc(30px / 2) calc(30px / 2); */
  width: calc(100% - 320px);
  height: calc(250px);
  /* border: #7a7a7a solid 1px; */
  box-sizing: border-box;
  background-color: #363636;

  border-top: #474747 solid 1px;
  box-sizing: border-box;
  /* #474747 */
  /* box-shadow: 0px 5px 30px 0px #c7c7c7; */
  position: relative;
}
.timleine-box-title{
  /* border-radius: calc(30px / 2) calc(30px / 2) 0px 0px; */
  position: relative;
  height: 30px;
  background-color: #e7e7e7;
}
.title-text{
  position: absolute;
  bottom: 0px;
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
  right: 0px;
  height: 30px;
  width: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.title-cross img{
  cursor: pointer;
  /* border: black solid 5px; */
  /* border-radius: 959px; */
  /* padding: 7px; */
  width: 12px;
  height: 12px;
}

.timleine-box-content{
  height: calc(100%);
  overflow: hidden;
  /* overflow: scroll; */
  /* -webkit-overflow-scrolling: touch; */
}
</style>
