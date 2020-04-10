class Vector4{

  values : Number[] = [0.0,0.0,0.0,1.0];

  constructor(
    x : Number | undefined,
    y : Number | undefined,
    z : Number | undefined,
    w : Number | undefined
  ){
    this.set(x,y,z,w)
  }

  set( x : Number = 0.0, y : Number = 0.0, z : Number = 0.0, w : Number = 1.0 ){
    this.values[0] = x
    this.values[1] = y
    this.values[2] = z
    this.values[3] = w
  }

  get x() : Number {
    return this.values[0]
  }

  get y() : Number {
    return this.values[1]
  }

  get z() : Number {
    return this.values[2]
  }

  get w() : Number {
    return this.values[3]
  }

  set x(value : Number){
    this.values[0] = value
  }

  set y(value : Number){
    this.values[1] = value
  }

  set z(value : Number){
    this.values[2] = value
  }

  set w(value : Number){
    this.values[3] = value
  }

  valueOf() : Number[]{
    return this.values
  }

}

export default Vector4
