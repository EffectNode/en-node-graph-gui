#include <common>

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


#define M_PI 3.1415926535897932384626433832795
float atan2(in float y, in float x) {
	bool xgty = (abs(x) > abs(y));
	return mix(M_PI/2.0 - atan(x,y), atan(y,x), float(xgty));
}
vec3 fromBall(float r, float az, float el) {
	return vec3(
    r * cos(el) * cos(az),
    r * cos(el) * sin(az),
    r * sin(el)
  );
}
void toBall(vec3 pos, out float az, out float el) {
	az = atan2(pos.y, pos.x);
	el = atan2(pos.z, sqrt(pos.x * pos.x + pos.y * pos.y));
}
// float az = 0.0;
// float el = 0.0;
// vec3 noiser = vec3(lastVel);
// toBall(noiser, az, el);
// lastVel.xyz = fromBall(1.0, az, el);


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


void toTriangle (inout vec2 rect, inout vec4 pos, float squareVertexID, inout bool shouldSkipRender) {
  if (mod(squareVertexID, 3.0) == 0.0) {
    pos.x = 1.0 * rect.x; //Width;
    pos.y = 1.0 * rect.y; //Height;
    pos.z = 0.0;
  } else if (mod(squareVertexID, 3.0) == 1.0) {
    pos.x = -1.0 * rect.x; //Width;
    pos.y = 1.0 * rect.y; //Height;
    pos.z = 0.0;
  } else if (mod(squareVertexID, 3.0) == 2.0) {
    pos.x = -1.0 * rect.x; //Width;
    pos.y = -1.0 * rect.y; //Height;
    pos.z = 0.0;
  } else {
    shouldSkipRender = true;
  }
}

uniform vec3 mousePos;
uniform vec3 screen;

void main ()	{
  vec2 cellSize = 1.0 / resolution.xy;
  vec2 newCell = gl_FragCoord.xy;
  vec2 uv = newCell * cellSize;
  vec4 pos = texture2D(tPos, uv);
  vec4 vel = texture2D(tVel, uv);
  vec4 idx = texture2D(tIdx, uv);

  bool shouldSkipRendering = false;

  float vertexID = idx.w;
  float squareVertexID = idx.x;
  float squareIDX = idx.y;
  float totalSquares = idx.z;

  vec2 plane = vec2(
    0.25, // width
    0.25 // height
  );

  if (pos.x == 0.0 && pos.y == 0.0 && pos.z == 0.0) {
    float dimension = pow(totalSquares, 1.0 / 3.0);
    float cubeID = mod(squareIDX, dimension);

    float xx = mod(cubeID * pow(dimension, 0.0), dimension);
    float yy = mod(cubeID * pow(dimension, 1.0), dimension);
    float zz = mod(cubeID * pow(dimension, 2.0), dimension);

    vec3 finalXYZ = vec3(xx, yy, zz);

    float adjustToCenter = dimension * -0.5;
    finalXYZ += adjustToCenter;

    float changeTo = 1.0 / dimension;
    finalXYZ *= changeTo;

    vec4 offset = vec4(finalXYZ, 1.0) * 50.0;

    float az = 0.0;
    float el = 0.0;

    vec3 virtualBall = vec3(offset.xyz);
    toBall(virtualBall, az, el);

    toPlane(plane, pos, squareVertexID, shouldSkipRendering);

    pos.xyz += fromBall(150.0, az, el);
    // pos.xyz += vec3(offset);
  } else {
    float mode = 2.0;
    if (mode == 0.0) {
      vec3 mpos = pos.xyz / 350.0 * 3.14159264 * 2.0;
      vec4 vel = texture2D(tVel, uv);

      vec3 sim = vec3(vel.xyz * 100.0 + mpos.xyz);
      sim.x += sin(mpos.x * 2.0 * tan(mpos.y * time)) * cos(mpos.y + time);
      sim.y += cos(mpos.y * tan(mpos.x * time)) * sin(mpos.z + time);
      sim.z += cos(mpos.z * tan(mpos.z * time)) * sin(mpos.x + time);

      pos.xyz = rotateY(mpos.z + time) * pos.xyz;
      pos.xyz = rotateX(mpos.y + time) * pos.xyz;
      pos.xyz = rotateZ(mpos.x + time) * pos.xyz;

      pos.xyz += sim.xyz * 0.1;

      vec3 virtualBall = vec3(pos.xyz);
      float az = 0.0;
      float el = 0.0;
      toBall(virtualBall, az, el);
      pos.xyz = fromBall(300.0, az, el);
    } else if (mode == 1.0) {
      vec3 mpos = pos.xyz / 350.0 * 3.14159264 * 2.0;

      pos.xyz = rotateX(mpos.x) * pos.xyz;
      pos.xyz = rotateY(mpos.y) * pos.xyz;
      pos.xyz = rotateZ(mpos.z) * pos.xyz;
    } else if (mode == 2.0) {
      vec3 mpos = pos.xyz / 350.0 * 3.14159264 * 2.0;

      pos.xyz = rotateX(mpos.x) * pos.xyz;
      pos.xyz = rotateY(mpos.y) * pos.xyz;
      pos.xyz = rotateZ(mpos.z) * pos.xyz;

      pos.xyz = rotateQ(normalize(mpos), time) * pos.xyz;
    }
  }

  if (shouldSkipRendering) {
    pos.w = 0.0;
    discard;
  } else {
    pos.w = 1.0;
    gl_FragColor = pos;
  }

}