import {
  Cube,
  Triangle,
  Mesh,
  Vector4,
  Screen,
  Matrix,
  ZRotationMatrix,
  YRotationMatrix,
  XRotationMatrix,
  TranslationMatrix,
  PointAtMatrix
} from '../index'


let screen = new Screen({selector : "#screen"})
let mainObject : Mesh = new Cube({size : 1.0})
let yaw = 0

window.addEventListener("keydown",function(evt){
  let forwardVector = screen.lookDirection.multiply(0.2)
  switch(evt.key){
    case "a":
      screen.camera.x -= 0.2;
      break;
    case "d":
      screen.camera.x += 0.2;
      break;
    case "w":
      screen.camera = screen.camera.add(forwardVector)
      break;
    case "s":
      screen.camera = screen.camera.substract(forwardVector)
      break;
    case "ArrowLeft":
      yaw-=0.1
      break;
    case "ArrowRight":
      yaw+=0.1
      break;
    case "ArrowUp":
      screen.camera.y -= 0.2;
      break;
    case "ArrowDown":
      screen.camera.y += 0.2;
      break;
  }
})


function loadNewObject(data : any){
  const lines    = data.split("\n")
  const vertices : any[] = lines
    .filter( (l : any )=> /^v/i.test(l) )
    .map( (l : any) => l.replace(/^v\s/i,'').split(' ') .map( (v : any) => parseFloat(v)) )

  let triangles = lines
    .filter(( l : any) => /^f/i.test(l) )
    .map( (l : any) => l.replace(/^f\s/i,'').split(' '))

  triangles = triangles.map( (triangle : any) => {
    let v = triangle
      .map( (i : any) => new Vector4(...vertices[i-1]) )
    return new Triangle({ vertices : v })
  })

  mainObject = new Mesh({ triangles })

  console.log("Result:",mainObject)


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




    console.log(screen)

    let previous  = null
    let theta     = 0

    screen.canvas.strokeStyle = "blue";
    // screen.add(mainObject)

    window.rotateCube = function(timestamp){
      // console.log("Rotating cube")

      screen.fill("black")

      if (!previous) previous = timestamp;
      var elapsedTime = timestamp - previous;
      previous = timestamp


      // Set up rotation matrices
    	let matRotZ  = new ZRotationMatrix({ angleRad : theta * 0.5 });
      let matRotX  = new XRotationMatrix({ angleRad : theta });
      let matTrans = new TranslationMatrix({ x : 0, y : 0, z : 4 });
      let matWorld = matRotZ.multiplyMatrix(matRotX).multiplyMatrix(matTrans);

      let upVector = new Vector4(0,1,0);
      // let targetVector = screen.camera.add(screen.lookDirection)
      let targetVector = new Vector4(0,0,1)
      let matCameraRot = new YRotationMatrix({ angleRad : yaw })
      let lookDirectionVector = matCameraRot.multiplyVector(targetVector)
      targetVector = screen.camera.add(lookDirectionVector)


      let matCamera = new PointAtMatrix({
        position : screen.camera,
        target : targetVector,
        up : upVector
      })

      let matView = matCamera.inverse()



    	// theta += 0.001 * elapsedTime;



      let trianglesToRaster = mainObject.triangles.map( triangle => {



        let
        projectedTriangle     : Triangle,
        transformedTriangle   : Triangle,
        viewedTriangle          : Triangle;


        transformedTriangle = new Triangle(
          {
            vertices : triangle.vertices.map(
              vertex => matWorld.multiplyVector(vertex)
            )
          }
        )




    		// Get lines either side of triangle
    		const line1 = transformedTriangle.vertices[1].substract(transformedTriangle.vertices[0])
    		const line2 = transformedTriangle.vertices[2].substract(transformedTriangle.vertices[0])

    		// Take cross product of lines to get normal to triangle surface
    		const normal = line1.crossProduct(line2).normalised()

        const cameraRay = transformedTriangle.vertices[0].substract(screen.camera);



        if( normal.dotProduct(cameraRay) < 0 ){

          const luminance = normal.dotProduct(globalLight)

          const color = parseInt(255*luminance)

          viewedTriangle = new Triangle(
            {
              vertices : transformedTriangle.vertices.map(
                vertex => matView.multiplyVector(vertex)
              )
            }
          )


          projectedTriangle = new Triangle(
            {
              vertices : viewedTriangle.vertices.map(
                vertex =>{
                  const result = screen.projectionMatrix.multiplyVector(vertex)
                  return result.divide(result.w)
                }

              )
            }
          )



          projectedTriangle.color = `rgba(${color},${color},${color},1.0)`;



          // Scale into view
          const offsetView = new Vector4(1,1,0)
          projectedTriangle.vertices[0] = projectedTriangle.vertices[0].add(offsetView)
          projectedTriangle.vertices[1] = projectedTriangle.vertices[1].add(offsetView)
          projectedTriangle.vertices[2] = projectedTriangle.vertices[2].add(offsetView)

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

      window.requestAnimationFrame(window.rotateCube);
    }

    window.requestAnimationFrame(window.rotateCube);
