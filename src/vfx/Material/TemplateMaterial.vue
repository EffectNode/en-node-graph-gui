<template>
<div>
</div>
</template>
<script>
import { ShaderMaterial, Color } from 'three'
export default {
  props: {
  },
  data () {
    return {
      box: false
    }
  },
  mounted () {
    let mat = new ShaderMaterial({
      uniforms: {
        solidColor: {
          value: new Color(`#ffff00`)
        }
      },
      transparent: true,
      vertexShader: `
        void main()	{
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
      `,
      fragmentShader: `
        uniform vec3 solidColor;
        void main (void) {
          gl_FragColor = vec4(solidColor, 0.7);
        }
      `
    })
    this.material = mat
  }
}
</script>

<style>

</style>
