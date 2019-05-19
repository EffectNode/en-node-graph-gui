<template>
  <div>

  </div>
</template>

<script>
import { Mesh, BoxBufferGeometry, ShaderMaterial } from 'three'
export default {
  data () {
    return {
      box: false
    }
  },
  mounted () {
    let geo = new BoxBufferGeometry(20, 20, 20, 100, 100, 100)
    let GLSL = v => v[0]
    let mat = new ShaderMaterial({
      vertexShader: GLSL`
        void main()	{
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
      `,
      fragmentShader: GLSL`
        void main (void) {
          gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
        }
      `
    })
    this.box = new Mesh(geo, mat)
    this.$parent.$emit('add', this.box)
  }
}
</script>

<style>

</style>
