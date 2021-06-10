import { PointLight, AmbientLight } from 'three'

const pointLight = new PointLight(0xffffff, 10)
pointLight.position.set(0, 0, 0)
const ambientLight = new AmbientLight(0xeeccaa)

export { pointLight, ambientLight }