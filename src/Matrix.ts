import Vector4 from './Vector4'

class Matrix{

    values : Number[] | Array<Array<Number>> = [
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0]
    ];

    multiplyVector(vector : Vector4) : Vector4 {
  	  let result = new Vector4();
  		result.x = vector.x * this.values[0][0] + vector.y * this.values[1][0] + vector.z * this.values[2][0] + vector.w * this.values[3][0];
  		result.y = vector.x * this.values[0][1] + vector.y * this.values[1][1] + vector.z * this.values[2][1] + vector.w * this.values[3][1];
  		result.z = vector.x * this.values[0][2] + vector.y * this.values[1][2] + vector.z * this.values[2][2] + vector.w * this.values[3][2];
  		result.w = vector.x * this.values[0][3] + vector.y * this.values[1][3] + vector.z * this.values[2][3] + vector.w * this.values[3][3];

      return result;
  	}


    multiplyMatrix(matrix : Matrix) : Matrix {
  		const result = new Matrix();
  		for (let c = 0; c < 4; c++){
        for (let r = 0; r < 4; r++){
          result.values[r][c] = this.values[r][0] * matrix.values[0][c] +
                                this.values[r][1] * matrix.values[1][c] +
                                this.values[r][2] * matrix.values[2][c] +
                                this.values[r][3] * matrix.values[3][c]
        }
      }
  		return result;
  	}






  	inverse(){
      // Only for Rotation/Translation Matrices
  		const inverted = new Matrix()
  		inverted.values[0][0] = this.values[0][0]; inverted.values[0][1] = this.values[1][0]; inverted.values[0][2] = this.values[2][0]; inverted.values[0][3] = 0.0;
  		inverted.values[1][0] = this.values[0][1]; inverted.values[1][1] = this.values[1][1]; inverted.values[1][2] = this.values[2][1]; inverted.values[1][3] = 0.0;
  		inverted.values[2][0] = this.values[0][2]; inverted.values[2][1] = this.values[1][2]; inverted.values[2][2] = this.values[2][2]; inverted.values[2][3] = 0.0;
  		inverted.values[3][0] = -(this.values[3][0] * inverted.values[0][0] + this.values[3][1] * inverted.values[1][0] + this.values[3][2] * inverted.values[2][0]);
  		inverted.values[3][1] = -(this.values[3][0] * inverted.values[0][1] + this.values[3][1] * inverted.values[1][1] + this.values[3][2] * inverted.values[2][1]);
  		inverted.values[3][2] = -(this.values[3][0] * inverted.values[0][2] + this.values[3][1] * inverted.values[1][2] + this.values[3][2] * inverted.values[2][2]);
  		inverted.values[3][3] = 1.0;
  		return inverted;
  	}



}

export default Matrix
