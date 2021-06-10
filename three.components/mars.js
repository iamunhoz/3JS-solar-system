import {
  Mesh,
  TextureLoader,
  SphereGeometry,
  MeshBasicMaterial
} from 'three'


const marsTexture = new TextureLoader().load('/marsMap.jpg')
const mars = new Mesh(
  new SphereGeometry(5, 20, 20),
  new MeshBasicMaterial({ map: marsTexture})
)

mars.position.x = 40

export { mars }