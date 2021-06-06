import './style.css'
import { scene, camera, renderer } from './three.components/setup.js'
import { ring, planet } from './three.components/saturn.js'
import { pointLight, ambientLight } from './three.components/lightSources.js'
//import { lightHelper, gridHelper } from './three.components/helpers.js'
import { spaceBackground } from './three.components/spaceBackground.js'
import { orbitControls } from './three.components/controls.js'

scene.add(
  ring,
  planet,
  pointLight,
  ambientLight,
  //lightHelper,
  //gridHelper,
  orbitControls
)
spaceBackground(scene)

function animate() {
  requestAnimationFrame( animate )
  renderer.render( scene, camera )
  ring.rotation.x = 1.57
  }
animate()