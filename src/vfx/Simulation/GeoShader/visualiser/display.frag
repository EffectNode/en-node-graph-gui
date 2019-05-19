#include <common>

varying vec3 v_tt;
varying vec3 v_audio;

uniform float time;

void main() {
  gl_FragColor = vec4(
    abs(v_tt.x * 1.0) + abs((v_tt.x)) + abs(v_audio.y),
    abs(v_tt.y * 1.0) + abs((v_tt.x)) + abs(v_audio.z),
    abs(v_tt.z * 1.0) + abs((v_tt.y)) + abs(v_audio.x),
    0.6
  );
}
