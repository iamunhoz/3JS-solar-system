import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import ObjectControls from './ObjectControls'
import { camera, renderer } from './setup'

// controls
const orbitControls = new OrbitControls( camera, renderer.domElement)


export { orbitControls }