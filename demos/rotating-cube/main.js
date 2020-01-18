function MultiplyMatrixVector(inputVertex, matrix){
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



const c = document.getElementById("screen")
const ctx = c.getContext("2d")
const rect = c.getBoundingClientRect()
c.width = rect.width
c.height = rect.height
ctx.strokeStyle = "white";




// Projection Matrix
let projectionMatrix = [
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0]
]

const
near = 0.1,
far = 1000.0,
fov = 90.0,
aspectRatio = c.height / c.width,
fovRad = 1.0 / (Math.tan((fov * 0.5) / (180.0 * 3.14159)));

projectionMatrix[0][0] = aspectRatio * fovRad;
projectionMatrix[1][1] = fovRad;
projectionMatrix[2][2] = far / (far - near);
projectionMatrix[3][2] = (-far * near) / (far - near);
projectionMatrix[2][3] = 1.0;
projectionMatrix[3][3] = 0.0;







const cube = new Cube({size : 1.0})
let previous = null
let theta = 0

function rotateCube(timestamp){
  ctx.beginPath()
  ctx.rect(0, 0, c.width, c.height)
  ctx.fillStyle = "black"
  ctx.fill()


  if (!previous) previous = timestamp;
  var elapsedTime = timestamp - previous;
  previous = timestamp


  // Set up rotation matrices
	let matRotZ = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
  ]
  , matRotX = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
  ];
	theta += 0.001 * elapsedTime;

	// Rotation Z
	matRotZ[0][0] = Math.cos(theta);
	matRotZ[0][1] = Math.sin(theta);
	matRotZ[1][0] = -Math.sin(theta);
	matRotZ[1][1] = Math.cos(theta);
	matRotZ[2][2] = 1;
	matRotZ[3][3] = 1;

  // Rotation X
	matRotX[0][0] = 1;
	matRotX[1][1] = Math.cos(theta * 0.5);
	matRotX[1][2] = Math.sin(theta * 0.5);
	matRotX[2][1] = -Math.sin(theta * 0.5);
	matRotX[2][2] = Math.cos(theta * 0.5);
	matRotX[3][3] = 1;

  cube.triangles.forEach( triangle => {


    let
    projectedTriangle,
    translatedTriangle,
    zRotatedTriangle,
    zxRotatedTriangle;

    zRotatedTriangle = new Triangle(
      {
        vertices : triangle.vertices.map(
          vertex =>{
            // Rotate in Z-Axis
            return MultiplyMatrixVector(vertex, matRotZ)
          }
        )
      }
    )

    zxRotatedTriangle = new Triangle(
      {
        vertices : zRotatedTriangle.vertices.map(
          vertex =>{
            // Rotate in Z-Axis
            return MultiplyMatrixVector(vertex, matRotX)
          }
        )
      }
    )



    translatedTriangle = new Triangle(
      {
        vertices : zxRotatedTriangle.vertices.map(
          vertex =>{
            translatedVertex = new Vertex();
            translatedVertex.x = vertex.x
            translatedVertex.y = vertex.y
            translatedVertex.z = vertex.z + 20
            return translatedVertex
          }
        )
      }
    )

    projectedTriangle = new Triangle(
      {
        vertices : translatedTriangle.vertices.map(
          vertex => MultiplyMatrixVector(vertex, projectionMatrix)
        )
      }
    )



    // Scale into view
    projectedTriangle.vertices[0].x += 1.0; projectedTriangle.vertices[0].y += 1.0;
    projectedTriangle.vertices[1].x += 1.0; projectedTriangle.vertices[1].y += 1.0;
    projectedTriangle.vertices[2].x += 1.0; projectedTriangle.vertices[2].y += 1.0;
    projectedTriangle.vertices[0].x *= 0.5 * c.width;
    projectedTriangle.vertices[0].y *= 0.5 * c.height;
    projectedTriangle.vertices[1].x *= 0.5 * c.width;
    projectedTriangle.vertices[1].y *= 0.5 * c.height;
    projectedTriangle.vertices[2].x *= 0.5 * c.width;
    projectedTriangle.vertices[2].y *= 0.5 * c.height;



    ctx.moveTo(projectedTriangle.vertices[0].x, projectedTriangle.vertices[0].y);
    [1,2,0].forEach(
      i => ctx.lineTo(projectedTriangle.vertices[i].x, projectedTriangle.vertices[i].y)
    )
    ctx.stroke();


  });
  window.requestAnimationFrame(rotateCube);
}

window.requestAnimationFrame(rotateCube);
