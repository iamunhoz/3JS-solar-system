import './style.css'
import { scene, camera, renderer } from './three.components/setup.js'
import { pointLight, ambientLight } from './three.components/lightSources.js'
import { spaceBackground } from './three.components/space.js'
import { orbitControls } from './three.components/controls.js'
//import { lightHelper, gridHelper } from './three.components/helpers.js'
import { sun } from './three.components/sun.js'
import { mercury } from './three.components/mercury.js'
import { venus } from './three.components/venus.js'
import { earth } from './three.components/earth.js'
import { mars } from './three.components/mars.js'
import { jupiter } from './three.components/jupiter.js'
import { saturn } from './three.components/saturn.js'
import { uranus } from './three.components/uranus.js'
import { neptune } from './three.components/neptune.js'
import { pluto } from './three.components/pluto.js'

const solarSystem = [
  sun,
  mercury,
  venus,
  earth,
  mars,
  jupiter,
  saturn,
  uranus,
  neptune,
  pluto,
]

solarSystem.forEach((celestialBody, index) => {
  celestialBody.position.x = index * 20
  scene.add(celestialBody)
})


scene.add(
  pointLight,
  ambientLight,
  orbitControls,
  //lightHelper,
  //gridHelper
)
spaceBackground(scene)

function animate() {
  orbitControls.update()
  requestAnimationFrame( animate )
  renderer.render( scene, camera )
}
animate()