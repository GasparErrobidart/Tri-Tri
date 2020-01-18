class Mesh{

  constructor(options){
    const { triangles } = options
    if(!triangles || !Array.isArray(triangles) ){
      throw new Error("Mesh has no triangles")
    }
    this.triangles = triangles
  }

}
