import {
  Mesh,
  TextureLoader,
  SphereGeometry,
  MeshBasicMaterial
} from 'three'


const jupiterTexture = new TextureLoader().load('/jupiterMap.jpg')
const jupiter = new Mesh(
  new SphereGeometry(5, 20, 20),
  new MeshBasicMaterial({ map: jupiterTexture})
)

jupiter.position.x = 50

export { jupiter }