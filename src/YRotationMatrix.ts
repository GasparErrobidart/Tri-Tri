import Matrix from './Matrix'

class YRotationMatrix extends Matrix{

  constructor(options = {}){
    super()
    const { angleRad = 0 } = options
  	this.values[0][0] = Math.cos(angleRad);
		this.values[0][2] = Math.sin(angleRad);
		this.values[2][0] = -Math.sin(angleRad);
		this.values[1][1] = 1.0
		this.values[2][2] = Math.cos(angleRad);
		this.values[3][3] = 1.0
  }

}

export default YRotationMatrix
