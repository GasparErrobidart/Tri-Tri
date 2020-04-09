(function(window){
  window.addEventListener('load',function(){
    // const c    = document.getElementById("screen")
    // const ctx  = c.getContext("2d")
    // const rect = c.getBoundingClientRect()
    // c.width    = rect.width
    // c.height   = rect.height


    let screen = new Screen({selector : "#screen"})

    console.log(screen)

    const cube    = new Cube({size : 1.0})
    let previous  = null
    let theta     = 0

    screen.canvas.strokeStyle = "white";
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
                translatedVertex.z = vertex.z + 20
                return translatedVertex
              }
            )
          }
        )

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



        screen.canvas.moveTo(projectedTriangle.vertices[0].x, projectedTriangle.vertices[0].y);
        [1,2,0].forEach(
          i => screen.canvas.lineTo(projectedTriangle.vertices[i].x, projectedTriangle.vertices[i].y)
        )
        screen.canvas.stroke();


      });
      window.requestAnimationFrame(rotateCube);
    }

    window.requestAnimationFrame(rotateCube);

  })
})(window)
