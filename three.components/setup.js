import { Scene, PerspectiveCamera, WebGLRenderer } from 'three'

const params = {
  'fieldOfView': 75,
  'aspectRatio': window.innerWidth / window.innerHeight,
  'nearPlane': 0.1,
  'farPlane': 1000,
  'canvas': { canvas: document.querySelector('#bg') },
  'cameraZPos': 30
}

const scene = new Scene()
const camera = new PerspectiveCamera(
  params.fieldOfView,
  params.aspectRatio,
  params.nearPlane,
  params.farPlane
)
camera.position.setZ(params.cameraZPos)
const renderer = new WebGLRenderer(params.canvas)
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)

export { camera, scene, renderer }