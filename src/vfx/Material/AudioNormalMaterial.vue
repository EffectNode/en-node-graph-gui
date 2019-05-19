<template>
<div>
</div>
</template>
<script>
import { ShaderMaterial, Color } from 'three'
export default {
  props: {
    audioTexture: {
      default () {
        return null
      }
    }
  },
  data () {
    return {
      material: false
    }
  },
  watch: {
    audioTexture () {
      this.setupAudio()
    }
  },
  methods: {
    setupAudio () {
      if (this.audioTexture) {
        this.material.uniforms.audioTexture.value = this.audioTexture
      }
    }
  },
  mounted () {
    let mat = this.mat = new ShaderMaterial({
      uniforms: {
        time: {
          value: window.performance.now() / 1000
        },
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
        uniform float time;
        void main(){
          vUv = uv;
          vec4 colorA = texture2D(audioTexture, vec2(vUv.x, vUv.y));
          vec3 newPos = position;
          newPos += colorA.r * normal.xyz * 0.5;
          vPos = newPos;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( newPos, 1.0 );
          gl_PointSize = 4.0;
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform vec3 solidColor;
        uniform float time;
        uniform sampler2D audioTexture;
        varying vec3 vPos;

        void main (void) {
          if (length(gl_PointCoord.xy) > 0.5) {
            discard;
          } else {
            vec4 colorA = texture2D(audioTexture, vec2(vUv.x, vUv.y));
            gl_FragColor = vec4(0.3 + vec3(colorA.r, colorA.r, colorA.r * 1.3 + vPos.z), (colorA.r + 0.1) * 3.0);
          }
        }
      `
    })
    this.material = mat
    this.setupAudio()
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
