import Matrix from './Matrix'

class TranslationMatrix extends Matrix{

  constructor(options = {}){
    super(options)
    const { x = 0, y = 0, z = 0 } = options
  	this.values[0][0] = 1.0
  	this.values[1][1] = 1.0
  	this.values[2][2] = 1.0
  	this.values[3][3] = 1.0
  	this.values[3][0] = x;
  	this.values[3][1] = y;
  	this.values[3][2] = z;
  }

}

export default TranslationMatrix
