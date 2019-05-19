#include <common>
uniform highp sampler2D tPos;
// uniform sampler2D tIdx;

varying vec3 v_tt;

void main() {
  // vec3 newPos = vec3(1.0);

  // position is changed to host uv vals
  vec4 tt = texture2D(tPos, position.xy);
  // vec4 idx = texture2D(tIdx, position.xy);

  v_tt = normalize(tt.xyz);

  vec4 mvPosition = modelViewMatrix * tt;
  vec4 outputPos = projectionMatrix * mvPosition;

  gl_Position = outputPos;
  gl_PointSize = 1.0;
}