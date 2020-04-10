(function(window){
  window.addEventListener('load',function(){
    // const c    = document.getElementById("screen")
    // const ctx  = c.getContext("2d")
    // const rect = c.getBoundingClientRect()
    // c.width    = rect.width
    // c.height   = rect.height

    const globalLight = new Point3D({z : -1.0})
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

    const cube    = new Cube({size : 1.0})
    let previous  = null
    let theta     = 0

    screen.canvas.strokeStyle = "blue";
    screen.add(cube)

    function rotateCube(timestamp){

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
                translatedVertex.z = vertex.z + 3
                return translatedVertex
              }
            )
          }
        )


        const
          normal  = new Point3D(),
          line1   = new Point3D(),
          line2   = new Point3D();

        line1.x   = translatedTriangle.vertices[1].x - translatedTriangle.vertices[0].x;
        line1.y   = translatedTriangle.vertices[1].y - translatedTriangle.vertices[0].y;
        line1.z   = translatedTriangle.vertices[1].z - translatedTriangle.vertices[0].z;

        line2.x   = translatedTriangle.vertices[2].x - translatedTriangle.vertices[0].x;
        line2.y   = translatedTriangle.vertices[2].y - translatedTriangle.vertices[0].y;
        line2.z   = translatedTriangle.vertices[2].z - translatedTriangle.vertices[0].z;

        normal.x  = (line1.y * line2.z) - (line1.z * line2.y)
        normal.y  = (line1.z * line2.x) - (line1.x * line2.z)
        normal.z  = (line1.x * line2.y) - (line1.y * line2.x)

        const length = Math.sqrt(normal.x**2 + normal.y**2 + normal.z**2)
        normal.x /= length
        normal.y /= length
        normal.z /= length

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
                vertex => MultiplyMatrixVector(vertex, screen.projectionMatrix.matrix)
              )
            }
          )



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

          screen.canvas.beginPath();
          screen.canvas.moveTo(projectedTriangle.vertices[0].x, projectedTriangle.vertices[0].y);
          screen.canvas.fillStyle = `rgba(${color},${color},${color},1.0)`;
          [1,2,0].forEach(
            i => {
              if(i == 0){
                screen.canvas.closePath()
              }else{
                screen.canvas.lineTo(projectedTriangle.vertices[i].x, projectedTriangle.vertices[i].y)
              }
            }
          )
          screen.canvas.fill();
          // screen.canvas.stroke();

        }



      });
      window.requestAnimationFrame(rotateCube);
    }

    window.requestAnimationFrame(rotateCube);

  })
})(window)
