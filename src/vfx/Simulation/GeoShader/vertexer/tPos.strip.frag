uniform float time;
uniform sampler2D tIdx;

mat3 rotateX(float rad) {
    float c = cos(rad);
    float s = sin(rad);
    return mat3(
        1.0, 0.0, 0.0,
        0.0, c, s,
        0.0, -s, c
    );
}

mat3 rotateY(float rad) {
    float c = cos(rad);
    float s = sin(rad);
    return mat3(
        c, 0.0, -s,
        0.0, 1.0, 0.0,
        s, 0.0, c
    );
}

mat3 rotateZ(float rad) {
    float c = cos(rad);
    float s = sin(rad);
    return mat3(
        c, s, 0.0,
        -s, c, 0.0,
        0.0, 0.0, 1.0
    );
}



void main()	{
  vec2 cellSize = 1.0 / resolution.xy;
  vec2 newCell = gl_FragCoord.xy;
  vec2 uv = newCell * cellSize;
  vec4 pos = texture2D(tPos, uv);
  vec4 idx = texture2D(tIdx, uv);

  bool isInvalid = false;

  float vertexIDX = idx.x;
  float squareIDX = idx.y;

  float strips = 100.0;

  float stripX = mod(squareIDX, strips);
  float stripY = floor(squareIDX / 200.0);

  float sX = 0.5;
  float sY = 0.2;
  float k = 1.0;
  float timer = time * 0.3;

  float offsetX = (stripX * 4.0) - strips * 2.0;
  float offsetY = (stripY * 2.0 * sY) - 200.0 * sY;

  if (vertexIDX == 0.0) {
    pos.x = 1.0 * sX + offsetX;
    pos.y = 1.0 * sY + offsetY;
    pos.z = 0.0;
  } else if (vertexIDX == 1.0) {
    pos.x = -1.0 * sX + offsetX;
    pos.y = 1.0 * sY + offsetY;
    pos.z = 0.0;
  } else if (vertexIDX == 2.0) {
    pos.x = -1.0 * sX + offsetX;
    pos.y = -1.0 * sY + offsetY;
    pos.z = 0.0;
  } else if (vertexIDX == 3.0) {
    pos.x = 1.0 * sX + offsetX;
    pos.y = 1.0 * sY + offsetY;
    pos.z = 0.0;
  } else if (vertexIDX == 4.0) {
    pos.x = -1.0 * sX + offsetX;
    pos.y = -1.0 * sY + offsetY;
    pos.z = 0.0;
  } else if (vertexIDX == 5.0) {
    pos.x = 1.0 * sX + offsetX;
    pos.y = -1.0 * sY + offsetY;
    pos.z = 0.0;
  } else {
    isInvalid = true;
  }

  pos.x = pos.x + sin(time + pos.y * 0.3) * 3.0;

  pos.z += sin(time + cos(time * 0.1) * pos.x * 0.3) * 3.0;
  pos.z += sin(time + cos(time * 0.1) * pos.y * 0.3) * 3.0;


  if (isInvalid) {
    pos.w = 0.0;
  } else {
    pos.w = 1.0;
  }

  gl_FragColor = pos;
}