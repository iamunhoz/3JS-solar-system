import {
  Mesh,
  TextureLoader,
  SphereGeometry,
  MeshBasicMaterial
} from 'three'


const plutoTexture = new TextureLoader().load('/plutoMap.jpg')
const pluto = new Mesh(
  new SphereGeometry(5, 20, 20),
  new MeshBasicMaterial({ map: plutoTexture})
)

pluto.position.x = 90

export { pluto }