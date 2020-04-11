import Matrix from './Matrix'

class ZRotationMatrix extends Matrix{

  constructor(options = {}){
    super()
    const { angleRad = 0 } = options
  	this.values[0][0] = Math.cos(angleRad);
		this.values[0][1] = Math.sin(angleRad);
		this.values[1][0] = -Math.sin(angleRad);
		this.values[1][1] = Math.cos(angleRad);
		this.values[2][2] = 1.0
		this.values[3][3] = 1.0
  }

}

export default ZRotationMatrix
