import Vertex from '../Vertex'

export default function MultiplyMatrixVector(inputVertex, matrix){
  let output = new Vertex();
	output.x = inputVertex.x * matrix[0][0] + inputVertex.y * matrix[1][0] + inputVertex.z * matrix[2][0] + matrix[3][0];
	output.y = inputVertex.x * matrix[0][1] + inputVertex.y * matrix[1][1] + inputVertex.z * matrix[2][1] + matrix[3][1];
	output.z = inputVertex.x * matrix[0][2] + inputVertex.y * matrix[1][2] + inputVertex.z * matrix[2][2] + matrix[3][2];
	let w = inputVertex.x * matrix[0][3] + inputVertex.y * matrix[1][3] + inputVertex.z * matrix[2][3] + matrix[3][3];

	if (w != 0)
	{
		output.x /= w;
    output.y /= w;
    output.z /= w;
	}

  return output
}
