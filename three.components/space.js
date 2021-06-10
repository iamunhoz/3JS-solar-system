import { 
  SphereGeometry,
  MeshStandardMaterial,
  Mesh,
  MathUtils,
  TextureLoader
  } from 'three'

const spaceTexture = new TextureLoader().load('/spaceBackground.jpg')

export default function addStar(scene) {
  const geometry = new SphereGeometry(0.25, 24, 24)
  const material = new MeshStandardMaterial(
    { color: 0xffeeee }
  )
  const star = new Mesh( geometry, material )

  const [x, y, z] = Array(3).fill().map(() => MathUtils.randFloatSpread(100))
  star.position.set( x, y, z )
  scene.add(star)
}

function spaceBackground(scene) {
  for (let i = 0; i < 200; i++) {
    addStar(scene)
  }
  scene.background = spaceTexture
}

export { spaceBackground }