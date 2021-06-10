import {
  Mesh,
  TextureLoader,
  SphereGeometry,
  MeshBasicMaterial
} from 'three'


const mercuryTexture = new TextureLoader().load('/mercuryMap.jpg')
const mercury = new Mesh(
  new SphereGeometry(5, 20, 20),
  new MeshBasicMaterial({ map: mercuryTexture})
)

mercury.position.x = 10

export { mercury }