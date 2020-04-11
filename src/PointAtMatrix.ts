import Matrix from './Matrix'
import Vector4 from './Vector4'

class PointAtMatrix extends Matrix{

  constructor(options = {}){
    super()
    const { position , target , up  } = options

    // Update Forward vector
  	const newForward = target.substract(position).normalised()

    // Update the up vector
    const a = newForward.multiply( up.dotProduct(newForward) )
    const newUp = up.substract(a).normalised()
    // Update right vector
    const newRight = newUp.crossProduct(newForward)

    // Update matrix values
		this.values[0][0] = newRight.x;	  this.values[0][1] = newRight.y;	  this.values[0][2] = newRight.z;	  this.values[0][3] = 0.0
		this.values[1][0] = newUp.x;		  this.values[1][1] = newUp.y;		  this.values[1][2] = newUp.z;		  this.values[1][3] = 0.0
		this.values[2][0] = newForward.x;	this.values[2][1] = newForward.y;	this.values[2][2] = newForward.z;	this.values[2][3] = 0.0
		this.values[3][0] = position.x;		this.values[3][1] = position.y;		this.values[3][2] = position.z;		this.values[3][3] = 1.0

  }

}

export default PointAtMatrix
