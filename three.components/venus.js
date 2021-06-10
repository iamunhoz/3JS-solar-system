import {
  Mesh,
  TextureLoader,
  SphereGeometry,
  MeshBasicMaterial
} from 'three'


const venusTexture = new TextureLoader().load('/venusMap.jpg')
const venus = new Mesh(
  new SphereGeometry(5, 20, 20),
  new MeshBasicMaterial({ map: venusTexture})
)

venus.position.x = 20

export { venus }