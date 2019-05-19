import * as THREE from 'three'

export const setup = ({ url }) => {
  var api = {}
  var fftSize = 512 // up to 2048 with pow2
  var listener = new THREE.AudioListener()
  var audio = new THREE.Audio(listener)
  var mediaElement = new Audio(url)
  mediaElement.loop = true
  mediaElement.play()
  audio.setMediaElementSource(mediaElement)
  var analyser = new THREE.AudioAnalyser(audio, fftSize)

  console.log(analyser.data)

  let texture = new THREE.DataTexture(analyser.data, fftSize / 2.0, 1.0, THREE.LuminanceFormat)

  api.pause = () => {
    mediaElement.pause()
  }

  api.update = () => {
    analyser.getFrequencyData()
    // analyser.getAverageFrequency()
    texture.needsUpdate = true

    return {
      texture
    }
  }
  api.credit = {
    author: 'skullbeatz',
    link: 'http://www.newgrounds.com/audio/listen/376737'
  }

  return api
}
