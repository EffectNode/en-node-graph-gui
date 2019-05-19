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
        audioTexture: {
          value: null
        },
        solidColor: {
          value: new Color(`#ff0000`)
        }
      },
      transparent: true,
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPos;
        uniform sampler2D audioTexture;

        void main()	{
          vUv = uv;
          vec4 colorA = texture2D(audioTexture, vec2(vUv.x, vUv.y));
          vec3 newPos = position;
          newPos.z += colorA.r * 1.0;
          vPos = abs(newPos);
          gl_Position = projectionMatrix * modelViewMatrix * vec4( newPos, 1.0 );
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying vec3 vPos;
        uniform vec3 solidColor;
        uniform sampler2D audioTexture;
        void main (void) {
          vec4 colorA = texture2D(audioTexture, vec2(vUv.x, vUv.y));
          gl_FragColor = vec4(vec3(colorA.r * 1.3, colorA.r, colorA.r), 0.7);
        }
      `
    })
    this.material = mat
    this.$emit('material', mat)
  },
  beforeDestroy () {
    this.material.dispose()
    this.$emit('material', false)
  }
}
</script>

<style>

</style>
