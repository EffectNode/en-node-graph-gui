precision highp float;
precision highp sampler2D;

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

mat3 rotateQ (vec3 axis, float rad) {
    float hr = rad / 2.0;
    float s = sin( hr );
    vec4 q = vec4(axis * s, cos( hr ));
    vec3 q2 = q.xyz + q.xyz;
    vec3 qq2 = q.xyz * q2;
    vec2 qx = q.xx * q2.yz;
    float qy = q.y * q2.z;
    vec3 qw = q.w * q2.xyz;

    return mat3(
        1.0 - (qq2.y + qq2.z),  qx.x - qw.z,            qx.y + qw.y,
        qx.x + qw.z,            1.0 - (qq2.x + qq2.z),  qy - qw.x,
        qx.y - qw.y,            qy + qw.x,              1.0 - (qq2.x + qq2.y)
    );
}
const float PI = 3.1415926535897932384626433832795;
const float PI_2 = 1.57079632679489661923;
const float PI_4 = 0.785398163397448309616;

mat4 scale(float x, float y, float z){
    return mat4(
        vec4(x,   0.0, 0.0, 0.0),
        vec4(0.0, y,   0.0, 0.0),
        vec4(0.0, 0.0, z,   0.0),
        vec4(0.0, 0.0, 0.0, 1.0)
    );
}

mat4 translate(float x, float y, float z){
    return mat4(
        vec4(1.0, 0.0, 0.0, 0.0),
        vec4(0.0, 1.0, 0.0, 0.0),
        vec4(0.0, 0.0, 1.0, 0.0),
        vec4(x,   y,   z,   1.0)
    );
}

mat4 RotateX(float phi){
    return mat4(
        vec4(1.,0.,0.,0),
        vec4(0.,cos(phi),-sin(phi),0.),
        vec4(0.,sin(phi),cos(phi),0.),
        vec4(0.,0.,0.,1.));
}

mat4 RotateY(float theta){
    return mat4(
        vec4(cos(theta),0.,-sin(theta),0),
        vec4(0.,1.,0.,0.),
        vec4(sin(theta),0.,cos(theta),0.),
        vec4(0.,0.,0.,1.));
}

mat4 RotateZ(float psi){
    return mat4(
        vec4(cos(psi),-sin(psi),0.,0),
        vec4(sin(psi),cos(psi),0.,0.),
        vec4(0.,0.,1.,0.),
        vec4(0.,0.,0.,1.));
}
struct Square {
  float xID;
  float yID;
  float xSize;
  float ySize;
  bool shouldSkipRender;
  vec4 vertex;
};

Square assembleSquaresIntoPlane (vec2 plane, vec2 gap)  {
  bool shouldSkipRender = false;
  vec2 cellSize = 1.0 / resolution.xy;
  vec2 newCell = gl_FragCoord.xy;
  vec2 uv = newCell * cellSize;
  vec4 oldPos = texture2D(tPos, uv);
  vec4 idx = texture2D(tIdx, uv);

  float vertexID = idx.w;
  float squareVertexID = idx.x;
  float squareIDX = idx.y;
  float totalPoints = idx.z;

  vec4 pos = vec4(0.0);
  float dimension = 368.0;
  float stackIDX = floor(squareIDX / dimension);
  float lineIDX = mod(squareIDX, dimension);
  if (lineIDX > dimension) {
    shouldSkipRender = true;
  }
  if (stackIDX > dimension) {
    shouldSkipRender = true;
  }

  float planeWidth = plane.x;
  float planeHeight = plane.y;

  float w = planeWidth * (2.0 + gap.x);
  float h = planeHeight * (2.0 + gap.y);

  float offsetX = (w * lineIDX) - (w * dimension * 0.5);
  float offsetY = (h * stackIDX) - (h * dimension * 0.5);
  vec3 offsetXYZ = vec3(offsetX, offsetY, 0.0);

  if (squareVertexID == 0.0) {
    pos.x = 1.0 * planeWidth;
    pos.y = 1.0 * planeHeight;
    pos.z = 0.0;
  } else if (squareVertexID == 1.0) {
    pos.x = -1.0 * planeWidth;
    pos.y = 1.0 * planeHeight;
    pos.z = 0.0;
  } else if (squareVertexID == 2.0) {
    pos.x = -1.0 * planeWidth;
    pos.y = -1.0 * planeHeight;
    pos.z = 0.0;
  } else if (squareVertexID == 3.0) {
    pos.x = 1.0 * planeWidth;
    pos.y = 1.0 * planeHeight;
    pos.z = 0.0;
  } else if (squareVertexID == 4.0) {
    pos.x = -1.0 * planeWidth;
    pos.y = -1.0 * planeHeight;
    pos.z = 0.0;
  } else if (squareVertexID == 5.0) {
    pos.x = 1.0 * planeWidth;
    pos.y = -1.0 * planeHeight;
    pos.z = 0.0;
  } else {
    shouldSkipRender = true;
  }

  pos.xyz += offsetXYZ;

  Square square = Square(lineIDX, stackIDX, dimension, dimension, shouldSkipRender, pos);

  return square;
}


void main ()	{
  //------ START READING ME --------
  vec2 planeSize = vec2(
    1.0, // width
    0.33 // height
  );
  vec2 gapSize = vec2(
    5.0, // x Gap
    0.0 // y Gap
  );

  Square info = assembleSquaresIntoPlane(planeSize, gapSize);
  float xID = info.yID;
  float yID = info.xID;
  float xSize = info.xSize;
  float ySize = info.ySize;
  vec4 pos = info.vertex;
  bool shouldSkipRender = info.shouldSkipRender;

  // go crazy
  float pX = pos.x;
  float pY = pos.y;
  float piz = 0.01 * 2.0 * 3.14159265;
  pos.xyz = rotateQ(normalize(vec3(1.0, 1.0, 1.0)), time + pY * piz) * rotateZ(time + pY * piz) * pos.xyz;
  pos.z += sin(time  + pX * piz * 0.333) * 50.0;

  // ------ STOP READING ME ------

  if (shouldSkipRender) {
    discard;
    return;
  } else {
    pos.w = 1.0;
    gl_FragColor = pos;
  }
}
