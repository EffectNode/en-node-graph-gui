
precision highp float;
precision highp sampler2D;

uniform float time;
uniform sampler2D tIdx;

float constrain(float val, float min, float max) {
    if (val < min) {
        return min;
    } else if (val > max) {
        return max;
    } else {
        return val;
    }
}

vec3 getDiff (in vec3 lastPos, in vec3 mousePos) {
  vec3 diff = lastPos.xyz / 33.3 - mousePos;
  float distance = constrain(length(diff), 20.0, 1000.0);
  float strength = 5.35 / (distance * distance);

  diff = normalize(diff);
  // delta
  diff = diff * strength * -2.0;
  // diff = diff * strength * (-20.83) * (1.0 / delta) * 0.0183;

  return diff;
}



void toPlane (inout vec2 rect, inout vec4 pos, float squareVertexID, inout bool shouldSkipRender) {
  if (squareVertexID == 0.0) {
    pos.x = 1.0 * rect.x; //Width;
    pos.y = 1.0 * rect.y; //Height;
    pos.z = 0.0;
  } else if (squareVertexID == 1.0) {
    pos.x = -1.0 * rect.x; //Width;
    pos.y = 1.0 * rect.y; //Height;
    pos.z = 0.0;
  } else if (squareVertexID == 2.0) {
    pos.x = -1.0 * rect.x; //Width;
    pos.y = -1.0 * rect.y; //Height;
    pos.z = 0.0;
  } else if (squareVertexID == 3.0) {
    pos.x = 1.0 * rect.x; //Width;
    pos.y = 1.0 * rect.y; //Height;
    pos.z = 0.0;
  } else if (squareVertexID == 4.0) {
    pos.x = -1.0 * rect.x; //Width;
    pos.y = -1.0 * rect.y; //Height;
    pos.z = 0.0;
  } else if (squareVertexID == 5.0) {
    pos.x = 1.0 * rect.x; //Width;
    pos.y = -1.0 * rect.y; //Height;
    pos.z = 0.0;
  } else {
    shouldSkipRender = true;
  }
}


uniform vec3 mousePos;

void main ()	{
  vec2 cellSize = 1.0 / resolution.xy;
  vec2 newCell = gl_FragCoord.xy;
  vec2 uv = newCell * cellSize;

  vec4 vel = texture2D(tVel, uv);
  vec4 pos = texture2D(tPos, uv);
  vec4 idx = texture2D(tIdx, uv);

  bool shouldSkipRendering = false;

  float vertexID = idx.w;
  float squareVertexID = idx.x;
  float squareIDX = idx.y;
  float totalSquares = idx.z;

  vel.xyz += getDiff(pos.xyz, vec3(-mousePos.x, mousePos.y, mousePos.z));

  gl_FragColor = vel;
}