<template>
<div class="box" :style="boxStyle">
  <div class="preview-box-title" :style="titleStyle">
    <div class="title-text">Preview</div>
    <div class="title-cross">Preview</div>
  </div>
  <div class="preview-box-content" :style="contentStyle">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      anchor: {
        x: 0,
        y: 30
      },
      boxStyle: {},
      titleStyle: {},
      contentStyle: {}
    }
  },
  mounted () {
    let sizer = () => {
      this.sync()
    }
    sizer()
    window.addEventListener('resize', sizer)
  },
  methods: {
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
  width: 300px;
  height: calc(300px * 16 / 9 + 60px);
  outline: #efefef solid 1px;
  background-color: #efefef;
}
.preview-box-title{
  height: 60px;
  background-color: #e7e7e7;
}
.title-text{
  height: 100%;
  width: 100%
}
.title-corss{
  position: absolute;
  top: 0px;
  right: 0px;
  height: 60px;
  width: 60px
}
</style>
