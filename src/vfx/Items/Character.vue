<template>
<div></div>
</template>

<script>
import { Mesh, BoxBufferGeometry, ShaderMaterial, Color } from 'three'
export default {
  props: {
    size: {
      default () {
        return { x: 1, y: 1, z: 1 }
      }
    },
    color: {
      default () {
        return `#ff00ff`
      }
    }
  },
  data () {
    return {
      box: false
    }
  },
  mounted () {
    let geo = new BoxBufferGeometry(this.size.x, this.size.y, this.size.z, 64, 64, 64)
    let mat = new ShaderMaterial({
      uniforms: {
        neoColor: {
          value: new Color(`${this.color}`)
        }
      },
      transparent: true,
      vertexShader: `
        void main()	{
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
      `,
      fragmentShader: `
        uniform vec3 neoColor;
        void main (void) {
          gl_FragColor = vec4(neoColor, 0.7);
        }
      `
    })
    this.box = new Mesh(geo, mat)
    this.$parent.$emit('add', this.box)
  },
  beforeDestroy () {
    this.$parent.$emit('remove', this.box)
  }
}
</script>

<style>

</style>
