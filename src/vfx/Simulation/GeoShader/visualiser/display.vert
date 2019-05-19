#include <common>
uniform sampler2D tPos;
uniform sampler2D tIdx;
uniform sampler2D tAudio;

varying vec3 v_tt;
varying vec3 v_audio;

void main() {
  // vec3 newPos = vec3(1.0);

  // position is changed to host uv vals
  vec4 tt = texture2D(tPos, position.xy);
  vec4 idx = texture2D(tIdx, position.xy);
  float squareIDX = idx.y;
  float totalSquares = idx.z;

  vec2 audioTextureDimension = vec2(
    totalSquares * 2.0,
    1.0
  );
  vec2 audioUV = vec2(mod(squareIDX, audioTextureDimension.x), 0.0) / audioTextureDimension;
  vec4 audioInfo = texture2D(tAudio, audioUV);

  v_audio = vec3(
    audioInfo.r,
    audioUV.x,
    0
  );

  v_tt = normalize(tt.xyz);

  vec4 mvPosition = modelViewMatrix * tt;
  vec4 outputPos = projectionMatrix * mvPosition;

  gl_Position = outputPos;
}
