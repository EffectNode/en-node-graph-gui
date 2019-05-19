import { LinearFilter, VideoTexture, RGBFormat } from 'three'

export const setup = () => {
  var api = {}

  var texture = null
  let video = document.createElement('video')

  window.addEventListener('touchstart', () => {
    if (video.paused) {
      video.play()
    }
  })
  window.addEventListener('click', () => {
    if (video.paused) {
      video.play()
    }
  })

  navigator.mediaDevices.getUserMedia({ audio: false, video: true }).then((stream) => {
    video.autoplay = true
    video.muted = true
    video.srcObject = stream
    video.play()
    video.setAttribute('playsinline', true)
    texture = new VideoTexture(video)
    texture.minFilter = LinearFilter
    texture.magFilter = LinearFilter
    texture.format = RGBFormat
  })

  api.pause = () => {
    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
  }

  api.update = () => {
    if (texture) {
      texture.needsUpdate = true
    }

    return {
      texture
    }
  }
  return api
}

/*
var listener = new THREE.AudioListener();
camera.add( listener );

navigator.mediaDevices.getUserMedia( { sound: true, video: false } ).then( handleSuccess );

function handleSuccess( stream ) {

    var sound = new THREE.Audio( listener );
}
*/
