import {
  Mesh,
  TextureLoader,
  SphereGeometry,
  MeshBasicMaterial
} from 'three'


const uranusTexture = new TextureLoader().load('/uranusMap.jpg')
const uranus = new Mesh(
  new SphereGeometry(5, 20, 20),
  new MeshBasicMaterial({ map: uranusTexture})
)

uranus.position.x = 70

export { uranus }