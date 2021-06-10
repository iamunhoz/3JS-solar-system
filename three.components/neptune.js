import {
  Mesh,
  TextureLoader,
  SphereGeometry,
  MeshBasicMaterial
} from 'three'


const neptuneTexture = new TextureLoader().load('/neptuneMap.jpg')
const neptune = new Mesh(
  new SphereGeometry(5, 20, 20),
  new MeshBasicMaterial({ map: neptuneTexture})
)

neptune.position.x = 80

export { neptune }