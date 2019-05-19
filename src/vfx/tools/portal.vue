<template>
  <div ref="uicontrol">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$emit('uicontrol', this.$refs.uicontrol)
  }
}
</script>

<style>

</style>
