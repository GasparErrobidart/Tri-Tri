import Matrix from './Matrix'

class XRotationMatrix extends Matrix{

  constructor(options = {}){
    super(options)
    const { angleRad = 0 } = options
		this.values[0][0] = 1.0
		this.values[1][1] = Math.cos(angleRad)
		this.values[1][2] = Math.sin(angleRad)
		this.values[2][1] = -Math.sin(angleRad)
		this.values[2][2] = Math.cos(angleRad)
		this.values[3][3] = 1.0
  }

}

export default XRotationMatrix
