import ProjectionMatrix from './ProjectionMatrix'
import Vector4 from './Vector4'

class Screen{

  camera : Vector4;

  constructor(options){
    const {
      selector,
      wireframe = {}
    }  = options
    this.canvasDOM        = document.querySelector(selector)
    this.canvas           = this.canvasDOM.getContext("2d")
    this.rect             = this.canvasDOM.getBoundingClientRect()
    this.meshes           = []
    this.meshIndex        = -1
    this.wireframe        = wireframe
    this.projectionMatrix = new ProjectionMatrix({
      width : this.width,
      height: this.height
    })
    this.canvasDOM.width  = this.width
    this.canvasDOM.height = this.height
    this.camera           = new Vector4()
    this.lookDirection    = new Vector4(0,0,1)
  }

  get width(){
    return this.rect.width
  }

  get height(){
    return this.rect.height
  }

  fill(color){
    this.canvas.beginPath()
    this.canvas.rect(0, 0, this.width, this.height)
    this.canvas.fillStyle = color
    this.canvas.fill()
  }

  add(mesh){
    if(
      !mesh.__id ||
      !this.meshes.find( m => m.__id == mesh.__id)
    ){
      mesh.__id = ++this.meshIndex
      this.meshes.push(mesh)
    }
  }

  remove(mesh){
    const meshIndex = this.meshes.findIndex( m => m.__id == mesh.__id)
    if(meshIndex){
      this.meshes.splice(meshIndex,1)
    }
  }

}

export default Screen
