import { jupiter } from './jupiter.js'

const MAX_DISTANCE = 6000000000
const FACTOR_OF_SIMPLIFICATION = 1000000 

// circle calculus
// x^2 + y^2 = r^2
// r = distanceFromSun
// x(initial) = distanceFromSun and y(initial) = 0
// y increments, x decrements, according to:
// y = rootOf(r - x)

function InferYCoordinateFromXCoordinateInCircle(CoordinateX, radius) {
  return Math.sqrt(radius - CoordinateX)
}

const planetsData = {
  bases: {
    incrementPerFrame: 0.01
  },
  jupiter: {
    distanceFromSun: 778
  }
}

function OrbitAroundStar(planet) {
  const radius = planetsData[planet].distanceFromSun
  for (let x = 0; x <= radius; x += planetsData.bases.incrementPerFrame) {
    let y = InferYCoordinateFromXCoordinateInCircle(x, radius)
    planet.SetCoordinates(x, y) //I guessed the function name, have to look for it later
  }
}


export default function PhysicsHandler() {

}