import Vertex from './Vertex'

class Triangle {

  vertices : Vertex[];

  constructor(options : any){
    const { vertices } = options
    if(!vertices || !Array.isArray(vertices) || vertices.length != 3){
      throw new Error("Triangle must have 3 vertices")
    }
    this.vertices = vertices
  }

}

export default Triangle
