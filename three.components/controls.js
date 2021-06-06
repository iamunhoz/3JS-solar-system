import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import ObjectControls from './ObjectControls'
import { camera, renderer } from './setup'
import { ring } from './saturn'


// controls
const orbitControls = new OrbitControls( camera, renderer.domElement)
const objectControls = new ObjectControls(camera, renderer.domElement, ring)

// controlling stuff scroll
function scrolling() {
  const t = document.body.getBoundingClientRect().top;
  ring.rotation.x += t
}

export { orbitControls, objectControls }