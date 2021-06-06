import { PointLightHelper, GridHelper } from 'three'
import { pointLight } from './lightSources'

const lightHelper = new PointLightHelper(pointLight)
const gridHelper = new GridHelper(200, 50)

export { lightHelper, gridHelper }