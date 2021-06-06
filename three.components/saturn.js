import { TorusGeometry,
  MeshStandardMaterial,
  Mesh,
  TextureLoader,
  SphereGeometry,
  MeshBasicMaterial
} from 'three'

const ringGeometry = new TorusGeometry( 10, 3, 2, 200)
const ringMaterial = new MeshStandardMaterial(
  { color: 0xddddff }
)
const ring = new Mesh(ringGeometry, ringMaterial)
const planetTexture = new TextureLoader().load('img/saturnmap.jpg')
const planet = new Mesh(
  new SphereGeometry(5, 20, 20),
  new MeshBasicMaterial({ map: planetTexture})
)

export { ring, planet }