import {
  Cube,
  Triangle,
  Mesh,
  Vector4,
  Screen,
  Matrix,
  IdentityMatrix,
  ZRotationMatrix,
  YRotationMatrix,
  XRotationMatrix,
  TranslationMatrix,
  PointAtMatrix
} from '../index'


let screen = new Screen({selector : "#screen"})
let mainObject : Mesh = new Cube({size : 1.0})
let yaw = 0
let elapsedTime = 0

window.addEventListener("keydown",function(evt){
  let forwardVector = screen.lookDirectionVector.multiply( 8  * elapsedTime)
  switch(evt.key){
    // case "a":
    //   screen.camera.x += 2 * elapsedTime;
    //   break;
    // case "d":
    //   screen.camera.x -= 2 * elapsedTime;
    //   break;
    case "w":
      screen.camera.y += 8 * elapsedTime;
      break;
    case "s":
      screen.camera.y -= 8 * elapsedTime;
      break;
    case "ArrowLeft":
      yaw-= 4 * elapsedTime
      break;
    case "ArrowRight":
      yaw+= 4 * elapsedTime
      break;
    case "ArrowUp":

      screen.camera = screen.camera.add(forwardVector)
      break;
    case "ArrowDown":

      screen.camera = screen.camera.substract(forwardVector)
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


    const globalLight = new Vector4(-1,1,-1)
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
      elapsedTime = (timestamp - previous) / 1000;
      previous = timestamp


      // Set up rotation matrices
    	let matRotZ  = new ZRotationMatrix({ angleRad : theta * 0.5 });
      let matRotX  = new XRotationMatrix({ angleRad : theta });
      let matTrans = new TranslationMatrix({ x : 0, y : 0, z : 2 });
      let matWorld = matRotZ.multiplyMatrix(matRotX).multiplyMatrix(matTrans);

      let upVector = new Vector4(0,1,0)
      let targetVector = new Vector4(0,0,1)
      let matCameraRot = new YRotationMatrix({ angleRad : yaw })
      screen.lookDirectionVector = matCameraRot.multiplyVector(targetVector)
      targetVector = screen.camera.add(screen.lookDirectionVector)


      let matCamera = new PointAtMatrix({
        position : screen.camera,
        target : targetVector,
        up : upVector
      })

      let matView = matCamera.inverse()



    	// theta += 0.001 * elapsedTime;



      let trianglesToRaster = []

      mainObject.triangles.forEach( triangle => {



        let
        projectedTriangles     : Triangle,
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


          // World Space -> View Space
          viewedTriangle = new Triangle(
            {
              vertices : transformedTriangle.vertices.map(
                vertex => matView.multiplyVector(vertex)
              )
            }
          )



          const clippedTriangles = viewedTriangle.clipAgainstPlane(
            new Vector4(0,0,screen.projectionMatrix.near),
            new Vector4(0,0,1)
          )

          // console.log("clipped",clippedTriangles)
          // From 3D -> 2D
          projectedTriangles = clippedTriangles.map((clippedTriangle,i) =>{
            const projectedTriangle = new Triangle(
              {
                vertices : clippedTriangle.vertices.map(
                  vertex =>{
                    let result = screen.projectionMatrix.multiplyVector(vertex)
                    result = result.divide(result.w)
                    result.x *= -1
                    result.y *= -1
                    return result
                  }

                )
              }
            )

            projectedTriangle.color = `rgba(${color},${color},${color},1.0)`
            projectedTriangle.luminance = luminance
            return projectedTriangle
          })





          // Scale into view
          const offsetView = new Vector4(1,1,0)
          projectedTriangles = projectedTriangles.map( projectedTriangle =>{
            projectedTriangle.vertices[0] = projectedTriangle.vertices[0].add(offsetView)
            projectedTriangle.vertices[1] = projectedTriangle.vertices[1].add(offsetView)
            projectedTriangle.vertices[2] = projectedTriangle.vertices[2].add(offsetView)

            projectedTriangle.vertices[0].x *= 0.5 * screen.width;
            projectedTriangle.vertices[0].y *= 0.5 * screen.height;
            projectedTriangle.vertices[1].x *= 0.5 * screen.width;
            projectedTriangle.vertices[1].y *= 0.5 * screen.height;
            projectedTriangle.vertices[2].x *= 0.5 * screen.width;
            projectedTriangle.vertices[2].y *= 0.5 * screen.height;
            return projectedTriangle
          })




          projectedTriangles.forEach( projectedTriangle => trianglesToRaster.push(projectedTriangle) )


        }





      });


      // console.log("Raster",trianglesToRaster)

      trianglesToRaster
        .sort( (t1,t2) => {
          let z1 = (t1.vertices[0].z + t1.vertices[1].z + t1.vertices[2].z) / 3.0;
    			let z2 = (t2.vertices[0].z + t2.vertices[1].z + t2.vertices[2].z) / 3.0;
    			return z2 - z1;
        } )
        .forEach( projectedTriangle =>{


          // Clip triangles against all four screen edges, this could yield
    			// a bunch of triangles, so create a queue that we traverse to
    			//  ensure we only test new triangles generated against planes
          const triangles = [projectedTriangle];
    			const clipped = [];

    			// Add initial triangle
    			let newTriangles = 1;

    			for (let p = 0; p < 4; p++) {
    				let trisToAdd = 0;
    				while (newTriangles > 0) {
    					// Take triangle from front of queue
    					let test = triangles.pop();
    					newTriangles--;

    					// Clip it against a plane. We only need to test each
    					// subsequent plane, against subsequent new triangles
    					// as all triangles after a plane clip are guaranteed
    					// to lie on the inside of the plane. I like how this
    					// comment is almost completely and utterly justified

    					switch (p)
    					{
    					case 0:	newTriangles = test.clipAgainstPlane(new Vector4( 0.0, 0.0, 0.0 ), new Vector4( 0.0, 1.0, 0.0 ) ); break;
    					case 1:	newTriangles = test.clipAgainstPlane(new Vector4(0.0, screen.height - 1, 0.0 ), new Vector4( 0.0, -1.0, 0.0 ) ); break;
    					case 2:	newTriangles = test.clipAgainstPlane(new Vector4( 0.0, 0.0, 0.0 ), new Vector4( 1.0, 0.0, 0.0 ) ); break;
    					case 3:	newTriangles = test.clipAgainstPlane(new Vector4( screen.width - 1, 0.0, 0.0 ), new Vector4( -1.0, 0.0, 0.0 )); break;
    					}
              trisToAdd = newTriangles.length

    					// Clipping may yield a variable number of triangles, so
    					// add these new ones to the back of the queue for subsequent
    					// clipping against next planes
    					for (let w = 0; w < trisToAdd; w++){
      					triangles.push(newTriangles[w]);
              }
    				}
    				newTriangles = triangles.length;
    			}



          triangles.forEach( triangle =>{
            //DRAW TRIANGLES
            screen.canvas.beginPath();
            screen.canvas.moveTo(triangle.vertices[0].x, triangle.vertices[0].y);
            screen.canvas.fillStyle = triangle.color;
            screen.canvas.strokeStyle = triangle.color;
            screen.canvas.lineWidth = 1.5;

            [1,2,0].forEach(
              i => {
                if(i == 0){
                  screen.canvas.fill()
                  screen.canvas.stroke();
                }else{
                  screen.canvas.lineTo(triangle.vertices[i].x, triangle.vertices[i].y)
                }
              }
            )
            // screen.canvas.stroke();
          })

        })

      window.requestAnimationFrame(window.rotateCube);
    }

    window.requestAnimationFrame(window.rotateCube);
