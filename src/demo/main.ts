import {
  Cube,
  Triangle,
  Mesh,
  Vector4,
  Screen,
  Matrix,
  ZRotationMatrix,
  XRotationMatrix,
  TranslationMatrix
} from '../index'

import MultiplyMatrixVector from '../helpers/MultiplyMatrixVector'


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
    	let matRotZ  = new ZRotationMatrix({ angleRad : theta * 0.5 });
      let matRotX  = new XRotationMatrix({ angleRad : theta });
      let matTrans = new TranslationMatrix({ x : 0, y : 0, z : 8 });
      let matWorld = matRotZ.multiplyMatrix(matRotX).multiplyMatrix(matTrans);



    	theta += 0.001 * elapsedTime;



      let trianglesToRaster = cube.triangles.map( triangle => {



        let
        projectedTriangle   : Triangle,
        transformedTriangle  : Triangle;





        transformedTriangle = new Triangle(
          {
            vertices : triangle.vertices.map(
              vertex => matWorld.multiplyVector(vertex)
            )
          }
        )


    		// Get lines either side of triangle
    		let line1 = transformedTriangle.vertices[1].substract(transformedTriangle.vertices[0])
    		let line2 = transformedTriangle.vertices[2].substract(transformedTriangle.vertices[0])

    		// Take cross product of lines to get normal to triangle surface
    		let normal = line1.crossProduct(line2).normalised()


        if(
          normal.x * (transformedTriangle.vertices[0].x - screen.camera.x) +
          normal.y * (transformedTriangle.vertices[0].y - screen.camera.y) +
          normal.z * (transformedTriangle.vertices[0].z - screen.camera.z)
          < 0
        ){

          const luminance =
            ( normal.x * globalLight.x ) +
            ( normal.y * globalLight.y ) +
            ( normal.z * globalLight.z );

          const color = parseInt(255*luminance)


          projectedTriangle = new Triangle(
            {
              vertices : transformedTriangle.vertices.map(
                vertex =>{
                  const result = screen.projectionMatrix.multiplyVector(vertex)
                  return result.divide(result.w)
                }

              )
            }
          )



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
