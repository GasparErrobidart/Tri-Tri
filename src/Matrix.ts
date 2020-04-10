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



    //
  	// mat4x4 Matrix_PointAt(vec3d &pos, vec3d &target, vec3d &up)
  	// {
  	// 	// Calculate new forward direction
  	// 	vec3d newForward = Vector_Sub(target, pos);
  	// 	newForward = Vector_Normalise(newForward);
    //
  	// 	// Calculate new Up direction
  	// 	vec3d a = Vector_Mul(newForward, Vector_DotProduct(up, newForward));
  	// 	vec3d newUp = Vector_Sub(up, a);
  	// 	newUp = Vector_Normalise(newUp);
    //
  	// 	// New Right direction is easy, its just cross product
  	// 	vec3d newRight = Vector_CrossProduct(newUp, newForward);
    //
  	// 	// Construct Dimensioning and Translation Matrix
  	// 	mat4x4 matrix;
  	// 	matrix.m[0][0] = newRight.x;	matrix.m[0][1] = newRight.y;	matrix.m[0][2] = newRight.z;	matrix.m[0][3] = 0.0f;
  	// 	matrix.m[1][0] = newUp.x;		matrix.m[1][1] = newUp.y;		matrix.m[1][2] = newUp.z;		matrix.m[1][3] = 0.0f;
  	// 	matrix.m[2][0] = newForward.x;	matrix.m[2][1] = newForward.y;	matrix.m[2][2] = newForward.z;	matrix.m[2][3] = 0.0f;
  	// 	matrix.m[3][0] = pos.x;			matrix.m[3][1] = pos.y;			matrix.m[3][2] = pos.z;			matrix.m[3][3] = 1.0f;
  	// 	return matrix;
    //
  	// }
    //
  	// mat4x4 Matrix_QuickInverse(mat4x4 &m) // Only for Rotation/Translation Matrices
  	// {
  	// 	mat4x4 matrix;
  	// 	matrix.m[0][0] = m.m[0][0]; matrix.m[0][1] = m.m[1][0]; matrix.m[0][2] = m.m[2][0]; matrix.m[0][3] = 0.0f;
  	// 	matrix.m[1][0] = m.m[0][1]; matrix.m[1][1] = m.m[1][1]; matrix.m[1][2] = m.m[2][1]; matrix.m[1][3] = 0.0f;
  	// 	matrix.m[2][0] = m.m[0][2]; matrix.m[2][1] = m.m[1][2]; matrix.m[2][2] = m.m[2][2]; matrix.m[2][3] = 0.0f;
  	// 	matrix.m[3][0] = -(m.m[3][0] * matrix.m[0][0] + m.m[3][1] * matrix.m[1][0] + m.m[3][2] * matrix.m[2][0]);
  	// 	matrix.m[3][1] = -(m.m[3][0] * matrix.m[0][1] + m.m[3][1] * matrix.m[1][1] + m.m[3][2] * matrix.m[2][1]);
  	// 	matrix.m[3][2] = -(m.m[3][0] * matrix.m[0][2] + m.m[3][1] * matrix.m[1][2] + m.m[3][2] * matrix.m[2][2]);
  	// 	matrix.m[3][3] = 1.0f;
  	// 	return matrix;
  	// }
    //



}

export default Matrix
