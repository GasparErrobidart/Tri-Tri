import Vector4 from './Vector4'

class Vertex extends Vector4{
  constructor(
    x : Number | undefined,
    y : Number | undefined,
    z : Number | undefined,
    w : Number | undefined
  ){
    super(x,y,z,w)
  }
}

export default Vertex
