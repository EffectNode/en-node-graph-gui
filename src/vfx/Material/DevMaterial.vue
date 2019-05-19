<template>
<div class="dev">
  <textarea v-if="material" v-model="material.vertexShader" @input="material.needsUpdate = true; save()" cols="30" rows="10"></textarea>
  <textarea v-if="material" v-model="material.fragmentShader" @input="material.needsUpdate = true; save()" cols="30" rows="10"></textarea>
 </div>
</template>
<script>
import { ShaderMaterial, Color } from 'three'
export default {
  props: {
    ns: {
      required: true
    },
    vs: {
      default () {
        return `
          void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
          }
        `
      }
    },
    uni: {
      default () {
        return {
          solidColor: {
            value: new Color(`#f0ff0f`)
          }
        }
      }
    },
    fs: {
      default () {
        return `
          uniform vec3 solidColor;
          void main (void) {
            gl_FragColor = vec4(solidColor, 0.7);
          }
        `
      }
    }
  },
  data () {
    return {
      material: false,
      box: false
    }
  },
  methods: {
    save () {
      window.localStorage.setItem(this.ns + 'vsfs', JSON.stringify({ vs: this.material.vertexShader, fs: this.material.fragmentShader }))
    },
    load () {
      let vsfs = window.localStorage.getItem(this.ns + 'vsfs')
      if (vsfs) {
        vsfs = JSON.parse(vsfs)
        this.material.vertexShader = vsfs.vs
        this.material.fragmentShader = vsfs.fs
        this.material.needsUpdate = true
      }
    },
    reset () {
      window.localStorage.removeItem(this.ns + 'vsfs')
    }
  },
  mounted () {
    let mat = new ShaderMaterial({
      transparent: true,
      uniforms: this.uni,
      vertexShader: this.vs,
      fragmentShader: this.fs
    })
    this.material = mat
    this.load()
    if (this.reset === true) {
      this.reset()
    }

    this.$forceUpdate()
    this.$emit('material', mat)
  },
  beforeDestroy () {
    this.material.dispose()
    this.$emit('material', false)
  }
}
</script>

<style scoped>
.dev{
  color: white;
  position: fixed;
  top: 0px;
  left: 0px;
}
</style>
