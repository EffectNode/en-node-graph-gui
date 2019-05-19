import * as THREE from 'three'
// import 'imports-loader?THREE=three!three/examples/js/GPUComputationRenderer.js'
import GPUComputationRenderer from '../GPGPU.js'

/* eslint-enable */
export const makeAPI = ({ renderer, scene }) => {
  var api = {}
  var WIDTH = 512;
  var gpuCompute = new GPUComputationRenderer(WIDTH, WIDTH, renderer)

  // pos IDX
  var posIdx = gpuCompute.createTexture();
  var slot = posIdx.image.data;
  var p = 0;

  for ( var j = 0; j < WIDTH; j ++ ) {
    for ( var i = 0; i < WIDTH; i ++ ) {
      let id = p / 4;
      slot[p + 0] = id % 6; // square 1 / 6 index
      slot[p + 1] = Math.floor(id / 6); // square
      slot[p + 2] = (WIDTH * WIDTH) / 6.0; // total
      slot[p + 3] = id;
      p += 4;
    }
  }

  // var velDynamic = gpuCompute.createTexture();
  var posDynamic = gpuCompute.createTexture();

  // var stateVar = gpuCompute.addVariable('tState', require('raw-loader!./tState.working-file.frag').default, stateDynamic );
  // stateVar.material.uniforms.tIdx = { value: posIdx };
  // stateVar.material.uniforms.time = { value: 0 };
  // stateVar.material.uniforms.mousePos = { value: new THREE.Vector3() }

  // var velVar = gpuCompute.addVariable('tVel', require('raw-loader!./tVel.working-file.frag').default, velDynamic );
  // velVar.material.uniforms.tIdx = { value: posIdx };
  // velVar.material.uniforms.time = { value: 0 };
  // velVar.material.uniforms.mousePos = { value: new THREE.Vector3() }
  // velVar.material.uniforms.screen = { value: new THREE.Vector3(window.innerWidth, window.innerHeight, 0.0) }

  var posVar = gpuCompute.addVariable('tPos', require('raw-loader!./tPos.working-file.frag').default, posDynamic );
  posVar.material.uniforms.tIdx = { value: posIdx };
  posVar.material.uniforms.time = { value: 0 };
  posVar.material.uniforms.mousePos = { value: new THREE.Vector3() }
  posVar.material.uniforms.screen = { value: new THREE.Vector3(window.innerWidth, window.innerHeight, 0.0) }

  // gpuCompute.setVariableDependencies( stateVar, [ stateVar, posVar, velVar ] );
  // gpuCompute.setVariableDependencies( velVar, [ posVar ] );
  gpuCompute.setVariableDependencies( posVar, [ posVar ] );

  var error = gpuCompute.init();
  if (error !== null) {
    console.error(error)
  }

  var geo = new THREE.BufferGeometry();

  let getUVInfo = () => {
    let newArr = []
    var na = 0;
    for ( var j = 0; j < WIDTH; j ++ ) {
      for ( var i = 0; i < WIDTH; i ++ ) {
        newArr[na + 0] = i / WIDTH;
        newArr[na + 1] = j / WIDTH;
        newArr[na + 2] = 0;
        na += 3;
      }
    }
    return newArr
  }

  geo.addAttribute('position',  new THREE.Float32BufferAttribute(getUVInfo(), 3));
  geo.addAttribute('posIdx',  new THREE.Float32BufferAttribute(posIdx.image.data, 4));

  var uniforms = {
    time: { value: 0 },
    tPos: { value: null }
  }
  var material = new THREE.ShaderMaterial({
    transparent: true,
    uniforms,
    defines: {
      resolution: `vec2(${renderer.domElement.width.toFixed(1)}, ${renderer.domElement.height.toFixed(1)})`
    },
    vertexShader: require('raw-loader!./display.vert').default,
    fragmentShader: require('raw-loader!./display.frag').default,
    side: THREE.DoubleSide
  })

  var mesh = new THREE.Points(geo, material)
  scene.add(mesh)

  api.setMouse = ({ mX, mY, rect }) => {
    // var stateMouse = stateVar.material.uniforms.mousePos.value
    // var velMouse = velVar.material.uniforms.mousePos.value
    var posMouse = posVar.material.uniforms.mousePos.value
    if (rect && typeof mX !== 'undefined' && typeof mY !== 'undefined') {
      // velMouse.x = ((mX - rect.left) / rect.width) * 2 - 1
      // velMouse.y = -((mY - rect.top) / rect.height) * 2 + 1
      posMouse.x = ((mX - rect.left) / rect.width) * 2 - 1
      posMouse.y = -((mY - rect.top) / rect.height) * 2 + 1
      // stateMouse.x = ((mX - rect.left) / rect.width) * 2 - 1
      // stateMouse.y = -((mY - rect.top) / rect.height) * 2 + 1

      // stateMouse.y *= rect.width / rect.height
      // velMouse.y *= rect.width / rect.height
      posMouse.y *= rect.width / rect.height
      // console.log(mouse)
    }
  }

  api.render = () => {
    let time = window.performance.now() * 0.001
    // stateVar.material.uniforms.time.value = time
    posVar.material.uniforms.time.value = time
    // velVar.material.uniforms.time.value = time

    uniforms.tPos.value = gpuCompute.getCurrentRenderTarget(posVar).texture
    uniforms.time.value = time
    gpuCompute.compute()
  }
  return api
}
