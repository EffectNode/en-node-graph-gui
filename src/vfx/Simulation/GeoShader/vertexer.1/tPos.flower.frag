uniform float time;
uniform sampler2D tIdx;
void main()	{
  vec2 cellSize = 1.0 / resolution.xy;
  vec2 newCell = gl_FragCoord.xy;
  vec2 uv = newCell * cellSize;
  vec4 pos = texture2D(tPos, uv);

  vec4 idx = texture2D(tIdx, uv);

  float vertexIDX = idx.x;
  float squareIDX = idx.y;

  float sX = 1.0;
  float sY = 1.0;
  float k = squareIDX;
  float timer = time * 0.1;

  float offsetX = (squareIDX + sX * 2.0 * 30.0) * (sin(timer + k) * sin(timer + k) - 0.5);
  float offsetY = (squareIDX + sY * 2.0 * 30.0) * sin(timer + k) * cos(timer + k);

  bool isInvalid = false;
  if (vertexIDX == 0.0) {
    pos.x = 1.0 * sX + offsetX;
    pos.y = 1.0 * sY + offsetY;
  } else if (vertexIDX == 1.0) {
    pos.x = -1.0 * sX + offsetX;
    pos.y = 1.0 * sY + offsetY;
  } else if (vertexIDX == 2.0) {
    pos.x = -1.0 * sX + offsetX;
    pos.y = -1.0 * sY + offsetY;
  } else if (vertexIDX == 3.0) {
    pos.x = 1.0 * sX + offsetX;
    pos.y = 1.0 * sY + offsetY;
  } else if (vertexIDX == 4.0) {
    pos.x = -1.0 * sX + offsetX;
    pos.y = -1.0 * sY + offsetY;
  } else if (vertexIDX == 5.0) {
    pos.x = 1.0 * sX + offsetX;
    pos.y = -1.0 * sY + offsetY;
  } else {
    isInvalid = true;
  }

  if (isInvalid) {
    pos.w = 0.0;
  } else {
    pos.w = 1.0;
  }
  gl_FragColor = pos;
}