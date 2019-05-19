#include <common>

varying vec3 v_tt;

void main() {
  gl_FragColor = vec4(
    0.25 + abs(v_tt.x),
    0.25 + abs(v_tt.y),
    0.25 + abs(v_tt.z),
    0.7
  );
}
