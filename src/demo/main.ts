import {
  Cube,
  Triangle,
  Mesh,
  Vector4,
  Screen,
  Matrix
} from '../index'

import MultiplyMatrixVector from '../helpers/MultiplyMatrixVector'


// console.log(multiply([0,1,2], [[2,2,0],[3,3,0],[3,3,1]]))

window.addEventListener("keydown",function(evt){
  switch(evt.key){
    case "a":
      break;
    case "d":
      break;
    case "w":
      break;
    case "s":
      break;
    case "ArrowLeft":
      break;
    case "ArrowRight":
      break;
    case "ArrowUp":
      break;
    case "ArrowDown":
      break;
  }
})


let cube : Cube = new Cube({size : 1.0})

function loadNewObject(data : any){
  const lines    = data.split("\n")
  const vertices : any[] = lines
    .filter( (l : any )=> /^v/i.test(l) )
    .map( (l : any) => l.replace(/^v\s/i,'').split(' '))
  let triangles = lines
    .filter(( l : any) => /^f/i.test(l) )
    .map( (l : any) => l.replace(/^f\s/i,'').split(' '))

  triangles = triangles.map( (triangle : any) => {
    let v = triangle
      .map( (i : any) => new Vector4(...vertices[i-1]) )
    return new Triangle({ vertices : v })
  })

  cube = new Mesh({ triangles })


}

function handleFileSelect(evt : any) {
  const file     = evt.target.files[0] // FileList object
  const reader   = new FileReader()
  reader.onload  = function(evt : any) {
    const data = evt.target.result;
    loadNewObject(data)
  };
  reader.readAsBinaryString(file);
}

document.getElementById('model-file').addEventListener('change', handleFileSelect, false);

(function(window){
  window.addEventListener('load',function(){

    const globalLight = new Vector4()
    globalLight.z     = -1.0
    const globalLightLength = Math.sqrt(
      globalLight.x**2+
      globalLight.y**2+
      globalLight.z**2
    )
    globalLight.x /= globalLightLength
    globalLight.y /= globalLightLength
    globalLight.z /= globalLightLength

    let screen = new Screen({selector : "#screen"})


    console.log(screen)

    let previous  = null
    let theta     = 0

    screen.canvas.strokeStyle = "blue";
    screen.add(cube)

    function rotateCube(timestamp){
      // console.log("Rotating cube")

      screen.fill("black")

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

      let trianglesToRaster = cube.triangles.map( triangle => {



        let
        projectedTriangle : Triangle,
        translatedTriangle : Triangle,
        zRotatedTriangle : Triangle,
        zxRotatedTriangle : Triangle;

        zRotatedTriangle = new Triangle(
          {
            vertices : triangle.vertices.map(
              vertex =>{
                // Rotate in Z-Axis
                return  MultiplyMatrixVector(vertex, matRotZ)
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
                let translatedVertex = new Vector4();
                translatedVertex.x = vertex.x;
                translatedVertex.y = vertex.y;
                translatedVertex.z = vertex.z + 8;
                return translatedVertex
              }
            )
          }
        )


        const
          normal  = new Vector4(0,0,0,1),
          line1   = new Vector4(0,0,0,1),
          line2   = new Vector4(0,0,0,1);



        line1.x   = translatedTriangle.vertices[1].x - translatedTriangle.vertices[0].x;
        line1.y   = translatedTriangle.vertices[1].y - translatedTriangle.vertices[0].y;
        line1.z   = translatedTriangle.vertices[1].z - translatedTriangle.vertices[0].z;

        line2.x   = translatedTriangle.vertices[2].x - translatedTriangle.vertices[0].x;
        line2.y   = translatedTriangle.vertices[2].y - translatedTriangle.vertices[0].y;
        line2.z   = translatedTriangle.vertices[2].z - translatedTriangle.vertices[0].z;

        normal.x  = (line1.y * line2.z) - (line1.z * line2.y)
        normal.y  = (line1.z * line2.x) - (line1.x * line2.z)
        normal.z  = (line1.x * line2.y) - (line1.y * line2.x)


        const length = Math.sqrt( normal.x**2 + normal.y**2 + normal.z**2 );
        normal.x = normal.x / length;
        normal.y = normal.y / length;
        normal.z = normal.z / length;




        if(
          normal.x * (translatedTriangle.vertices[0].x - screen.camera.x) +
          normal.y * (translatedTriangle.vertices[0].y - screen.camera.y) +
          normal.z * (translatedTriangle.vertices[0].z - screen.camera.z)
          < 0
        ){

          const luminance =
            ( normal.x * globalLight.x ) +
            ( normal.y * globalLight.y ) +
            ( normal.z * globalLight.z );

          const color = parseInt(255*luminance)


          projectedTriangle = new Triangle(
            {
              vertices : translatedTriangle.vertices.map(
                vertex =>{
                  const result = screen.projectionMatrix.multiplyVector(vertex)
                  if(result.w != 0){
                    result.x /= result.w
                    result.y /= result.w
                    result.z /= result.w
                  }
                  return result
                }

              )
            }
          )

          // console.log(projectedTriangle)


          projectedTriangle.color = `rgba(${color},${color},${color},1.0)`;



          // Scale into view
          projectedTriangle.vertices[0].x += 1.0; projectedTriangle.vertices[0].y += 1.0;
          projectedTriangle.vertices[1].x += 1.0; projectedTriangle.vertices[1].y += 1.0;
          projectedTriangle.vertices[2].x += 1.0; projectedTriangle.vertices[2].y += 1.0;

          projectedTriangle.vertices[0].x *= 0.5 * screen.width;
          projectedTriangle.vertices[0].y *= 0.5 * screen.height;
          projectedTriangle.vertices[1].x *= 0.5 * screen.width;
          projectedTriangle.vertices[1].y *= 0.5 * screen.height;
          projectedTriangle.vertices[2].x *= 0.5 * screen.width;
          projectedTriangle.vertices[2].y *= 0.5 * screen.height;



          return projectedTriangle;
        }

        return null;




      });



      trianglesToRaster
        .filter( t => t )
        .sort( (t1,t2) => {
          let z1 = (t1.vertices[0].z + t1.vertices[1].z + t1.vertices[2].z) / 3.0;
    			let z2 = (t2.vertices[0].z + t2.vertices[1].z + t2.vertices[2].z) / 3.0;
    			return z2 - z1;
        } )
        .forEach( projectedTriangle =>{
          screen.canvas.beginPath();
          screen.canvas.moveTo(projectedTriangle.vertices[0].x, projectedTriangle.vertices[0].y);
          screen.canvas.fillStyle = projectedTriangle.color;

          [1,2,0].forEach(
            i => {
              if(i == 0){
                screen.canvas.fill()
              }else{
                screen.canvas.lineTo(projectedTriangle.vertices[i].x, projectedTriangle.vertices[i].y)
              }
            }
          )
          // screen.canvas.stroke();
        })

      window.requestAnimationFrame(rotateCube);
    }

    window.requestAnimationFrame(rotateCube);

  })
})(window)
