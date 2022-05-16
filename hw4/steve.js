var loader = new THREE.TextureLoader();
loader.setCrossOrigin('');
texture = loader.load('https://i.imgur.com/IejOuMK.png');

var size = 2,
  xHead = 2 * size,
  yHead = 2 * size,
  zHead = 2 * size,
  xBody = 2 * size,
  yBody = 3 * size,
  zBody = 1 * size,
  xHand = 1 * size,
  yHand = 3 * size,
  zHand = 1 * size;

var U = 14 * size,
  V = 8 * size;

var vertices = [{
  x: -0.5,
  y: 0.5,
  z: 0.5
}, //-++
{
  x: 0.5,
  y: 0.5,
  z: 0.5
}, //+++
{
  x: 0.5,
  y: -0.5,
  z: 0.5
}, //+-+
{
  x: -0.5,
  y: -0.5,
  z: 0.5
}, //--+
{
  x: -0.5,
  y: 0.5,
  z: -0.5
}, //-+-
{
  x: 0.5,
  y: 0.5,
  z: -0.5
}, //++-
{
  x: 0.5,
  y: -0.5,
  z: -0.5
}, //+--
{
  x: -0.5,
  y: -0.5,
  z: -0.5
} //---
];

var allVert = [
  [0, 3, 2, 1],
  [1, 2, 6, 5],
  [4, 7, 3, 0],
  [5, 6, 7, 4],
  [4, 0, 1, 5],
  [3, 7, 6, 2]
];

var commonFace = [
  ['e', 'j', 'k', 'f'],
  ['f', 'k', 'l', 'g'],
  ['d', 'i', 'j', 'e'],
  ['g', 'l', 'm', 'h'],
  ['a', 'e', 'f', 'b'],
  ['f', 'b', 'c', 'g']
];

var bodyFace = [
  ['e', 'j', 'k', 'f'],
  ['f', 'k', 'l', 'g'],
  ['d', 'i', 'j', 'e'],
  ['g', 'l', 'm', 'h'],
  ['a', 'e', 'f', 'b'],
  ['b', 'f', 'x', 'c']
];

var headUvs = {
  a: {
    u: 2 * size,
    v: 8 * size
  },
  b: {
    u: 4 * size,
    v: 8 * size
  },
  c: {
    u: 6 * size,
    v: 8 * size
  },
  d: {
    u: 0 * size,
    v: 6 * size
  },
  e: {
    u: 2 * size,
    v: 6 * size
  },
  f: {
    u: 4 * size,
    v: 6 * size
  },
  g: {
    u: 6 * size,
    v: 6 * size
  },
  h: {
    u: 8 * size,
    v: 6 * size
  },
  i: {
    u: 0 * size,
    v: 4 * size
  },
  j: {
    u: 2 * size,
    v: 4 * size
  },
  k: {
    u: 4 * size,
    v: 4 * size
  },
  l: {
    u: 6 * size,
    v: 4 * size
  },
  m: {
    u: 8 * size,
    v: 4 * size
  },
}

var handUvs = {
  a: {
    u: 11 * size,
    v: 4 * size
  },
  b: {
    u: 12 * size,
    v: 4 * size
  },
  c: {
    u: 13 * size,
    v: 4 * size
  },
  d: {
    u: 10 * size,
    v: 3 * size
  },
  e: {
    u: 11 * size,
    v: 3 * size
  },
  f: {
    u: 12 * size,
    v: 3 * size
  },
  g: {
    u: 13 * size,
    v: 3 * size
  },
  h: {
    u: 14 * size,
    v: 3 * size
  },
  i: {
    u: 10 * size,
    v: 0 * size
  },
  j: {
    u: 11 * size,
    v: 0 * size
  },
  k: {
    u: 12 * size,
    v: 0 * size
  },
  l: {
    u: 13 * size,
    v: 0 * size
  },
  m: {
    u: 14 * size,
    v: 0 * size
  },
}

var legUvs = {
  a: {
    u: 1 * size,
    v: 4 * size
  },
  b: {
    u: 2 * size,
    v: 4 * size
  },
  c: {
    u: 3 * size,
    v: 4 * size
  },
  d: {
    u: 0 * size,
    v: 3 * size
  },
  e: {
    u: 1 * size,
    v: 3 * size
  },
  f: {
    u: 2 * size,
    v: 3 * size
  },
  g: {
    u: 3 * size,
    v: 3 * size
  },
  h: {
    u: 4 * size,
    v: 3 * size
  },
  i: {
    u: 0 * size,
    v: 0 * size
  },
  j: {
    u: 1 * size,
    v: 0 * size
  },
  k: {
    u: 2 * size,
    v: 0 * size
  },
  l: {
    u: 3 * size,
    v: 0 * size
  },
  m: {
    u: 4 * size,
    v: 0 * size
  },
}

var bodyUvs = {
  a: {
    u: 5 * size,
    v: 4 * size
  },
  b: {
    u: 7 * size,
    v: 4 * size
  },
  c: {
    u: 9 * size,
    v: 4 * size
  },
  d: {
    u: 4 * size,
    v: 3 * size
  },
  e: {
    u: 5 * size,
    v: 3 * size
  },
  f: {
    u: 7 * size,
    v: 3 * size
  },
  g: {
    u: 8 * size,
    v: 3 * size
  },
  x: {
    u: 9 * size,
    v: 3 * size
  },
  h: {
    u: 10 * size,
    v: 3 * size
  },
  i: {
    u: 4 * size,
    v: 0 * size
  },
  j: {
    u: 5 * size,
    v: 0 * size
  },
  k: {
    u: 7 * size,
    v: 0 * size
  },
  l: {
    u: 8 * size,
    v: 0 * size
  },
  m: {
    u: 10 * size,
    v: 0 * size
  },
}

function buildHead() {
  var vert = [];
  var uvs = [];
  var indices = [];
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      vert.push(vertices[allVert[i][j]].x * xHead, vertices[allVert[i][j]].y * yHead, vertices[allVert[i][j]].z * zHead);
      //console.log(vert);

      uvs.push(headUvs[commonFace[i][j]].u / U, headUvs[commonFace[i][j]].v / V);
      //console.log(uvs);
    }
    indices.push(0 + i * 4, 1 + i * 4, 2 + i * 4, 0 + i * 4, 2 + i * 4, 3 + i * 4);
    //console.log(indices);
  }

  var geometry = new THREE.BufferGeometry();
  geometry.setIndex(indices);
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vert, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));

  geometry.computeVertexNormals();
  let head = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide
  }));
  return head;
}

function buildBody() {
  var vert = [];
  var uvs = [];
  var indices = [];
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      vert.push(vertices[allVert[i][j]].x * xBody, vertices[allVert[i][j]].y * yBody, vertices[allVert[i][j]].z * zBody);
      //console.log(vert);

      uvs.push(bodyUvs[bodyFace[i][j]].u / U, bodyUvs[bodyFace[i][j]].v / V);
      //console.log(uvs);
    }
    indices.push(0 + i * 4, 1 + i * 4, 2 + i * 4, 0 + i * 4, 2 + i * 4, 3 + i * 4);
    //console.log(indices);
  }

  var geometry = new THREE.BufferGeometry();
  geometry.setIndex(indices);
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vert, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));

  geometry.computeVertexNormals();
  let body = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide
  }));
  return body;
}

function buildHandLeg(type) {
  var vert = [];
  var uvs = [];
  var indices = [];
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      vert.push(vertices[allVert[i][j]].x * xHand, vertices[allVert[i][j]].y * yHand, vertices[allVert[i][j]].z * zHand);
      //console.log(vert);

      if (type == 'hand') {
        uvs.push(handUvs[commonFace[i][j]].u / U, handUvs[commonFace[i][j]].v / V);
      } else if (type == 'leg') {
        uvs.push(legUvs[commonFace[i][j]].u / U, legUvs[commonFace[i][j]].v / V);
      }


      //console.log(uvs);
    }
    indices.push(0 + i * 4, 1 + i * 4, 2 + i * 4, 0 + i * 4, 2 + i * 4, 3 + i * 4);
    //console.log(indices);
  }

  var geometry = new THREE.BufferGeometry();
  geometry.setIndex(indices);
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vert, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));

  geometry.computeVertexNormals();

  let group = new THREE.Group();

  if (type == 'hand') {
    let hand = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide
    }));
    group.add(hand);
    hand.position.y = -size * 3 / 2;
  } else if (type == 'leg') {
    let leg = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide
    }));
    group.add(leg);
    leg.position.y = -size * 3 / 2;
  }
  return group;
}