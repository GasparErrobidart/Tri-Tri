class Vector4{

  values : Number[] = [0,0,0,1]

  constructor(
    x : Number | undefined,
    y : Number | undefined,
    z : Number | undefined,
    w : Number | undefined
  ){
    this.set(x,y,z,w)
  }

  set( x : Number = 0, y : Number =0, z : Number =0, w : Number =1 ){
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

  divide(k : Number) : Vector4{
    if(k != 0){
    	return new Vector4( this.x / k, this.y / k, this.z / k);
    }
  }

  multiply(k : Number) : Vector4{
    if(k != 0){
    	return new Vector4( this.x * k, this.y * k, this.z * k);
    }
  }

  dotProduct(vector : Vector4) : Number{
  	return this.x*vector.x + this.y*vector.y + this.z * vector.z;
  }

  length() : Number {
  	return Math.sqrt( this.dotProduct(this) );
  }

  normalised() : Vector4{
    return this.divide( this.length() )
  }

  crossProduct(vector : Vector4) : Vector4{
  	const result = new Vector4()
  	result.x = this.y * vector.z - this.z * vector.y;
  	result.y = this.z * vector.x - this.x * vector.z;
  	result.z = this.x * vector.y - this.y * vector.x;
  	return result;
  }

  add(vector : Vector4) : Vector4{
  	return new Vector4( this.x + vector.x, this.y + vector.y, this.z + vector.z );
  }

  substract(vector : Vector4) : Vector4{
  	return new Vector4( this.x - vector.x, this.y - vector.y, this.z - vector.z );
  }

}

export default Vector4
