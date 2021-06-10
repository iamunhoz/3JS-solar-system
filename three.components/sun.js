import {
  Mesh,
  TextureLoader,
  SphereGeometry,
  MeshBasicMaterial
} from 'three'


const sunTexture = new TextureLoader().load('/sunMap.jpg')
const sun = new Mesh(
  new SphereGeometry(5, 20, 20),
  new MeshBasicMaterial({ map: sunTexture})
)

sun.position.x = 0

export { sun }