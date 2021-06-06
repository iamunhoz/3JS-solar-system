import { PointLight, AmbientLight } from 'three'

const pointLight = new PointLight(0xffffff)
pointLight.position.set(10, 0, 0)
const ambientLight = new AmbientLight(0xeeccaa)

export { pointLight, ambientLight }