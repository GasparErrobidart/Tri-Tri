import Matrix from './Matrix'

class IdentityMatrix extends Matrix{

  constructor(options){
    super(options)
    this.values[0][0] = 1.0
		this.values[1][1] = 1.0
		this.values[2][2] = 1.0
		this.values[3][3] = 1.0
  }

}

export default IdentityMatrix
