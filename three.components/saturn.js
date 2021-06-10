import { TorusGeometry,
  MeshStandardMaterial,
  Mesh,
  TextureLoader,
  SphereGeometry,
  MeshBasicMaterial,
  Group
} from 'three'

const ringGeometry = new TorusGeometry( 10, 3, 2, 200)
const ringMaterial = new MeshStandardMaterial(
  { color: 0xddddff }
)
const ring = new Mesh(ringGeometry, ringMaterial)
const planetTexture = new TextureLoader().load('/saturnMap.jpg')
const planet = new Mesh(
  new SphereGeometry(5, 20, 20),
  new MeshBasicMaterial({ map: planetTexture})
)
ring.rotation.x = 1.57

const saturn = new Group()
saturn.add(planet, ring)


export { saturn }