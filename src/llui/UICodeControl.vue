<template>
  <div>
    <BRACE v-if="refresher && height" style="z-index: -1; width: 100%; overflow: hidden;" :style="{ height }" :mode="'html'" :getter="() => { return node.src || '' }" :setter="(v) => { node.src = v; update() }" @save="update(); reload()"></BRACE>
  </div>
</template>

<script>
export default {
  props: {
    node: {}
  },
  components: {
    BRACE: require('./Brace.vue').default
  },
  watch: {
    node: {
      deep: false,
      handler () {
        this.refresher = false
        this.$nextTick(() => {
          this.refresher = true
        })
      }
    }
  },
  data () {
    return {
      height: false,
      refresher: true
    }
  },
  mounted () {
    let rect = this.$parent.$el.getBoundingClientRect()
    this.height = rect.height + 'px'
  },
  methods: {
    reload () {
      this.$emit('reload', { node: this.node })
    },
    update () {

    }
  }
}
</script>

<style>

</style>
