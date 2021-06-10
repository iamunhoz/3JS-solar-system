import {
  Mesh,
  TextureLoader,
  SphereGeometry,
  MeshBasicMaterial
} from 'three'


const earthTexture = new TextureLoader().load('/earthMap.jpg')
const earth = new Mesh(
  new SphereGeometry(5, 20, 20),
  new MeshBasicMaterial({ map: earthTexture})
)

earth.position.x = 30

export { earth }