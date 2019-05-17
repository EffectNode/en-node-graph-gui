<template>
  <div>
    <pre>{{ node }}</pre>
  </div>
</template>

<script>
export default {
  props: {
    node: {
      required: true
    },
    nodes: {
      required: true
    }
  }
}
</script>

<style>

</style>
