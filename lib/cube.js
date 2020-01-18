class Cube extends Mesh{

  constructor(options){

    const { size = 1.0 } = options

    let triangles = [

      // SOUTH
  		new Triangle(
        {
          vertices : [
            new Vertex(0.0, 0.0, 0.0),
            new Vertex(0.0, size, 0.0),
            new Vertex(size, size, 0.0)
          ]
        }
      ),
      new Triangle(
        {
          vertices : [
            new Vertex(0.0, 0.0, 0.0),
            new Vertex(size, size, 0.0),
            new Vertex(size, 0.0, 0.0)
          ]
        }
      ),

  		// EAST
      new Triangle(
        {
          vertices : [
            new Vertex(size, 0.0, 0.0),
            new Vertex(size, size, 0.0),
            new Vertex(size, size, size)
          ]
        }
      ),
      new Triangle(
        {
          vertices : [
            new Vertex(size, 0.0, 0.0),
            new Vertex(size, size, size),
            new Vertex(size, 0.0, size )
          ]
        }
      ),

  		// NORTH
      new Triangle(
        {
          vertices : [
            new Vertex(size, 0.0, size),
            new Vertex(size, size, size),
            new Vertex(0.0, size, size )
          ]
        }
      ),
      new Triangle(
        {
          vertices : [
            new Vertex(size, 0.0, size),
            new Vertex(0.0, size, size),
            new Vertex(0.0, 0.0, size )
          ]
        }
      ),


  		// WEST
      new Triangle(
        {
          vertices : [
            new Vertex(0.0, 0.0, size),
            new Vertex(0.0, size, size),
            new Vertex(0.0, size, 0.0 )
          ]
        }
      ),
      new Triangle(
        {
          vertices : [
            new Vertex(0.0, 0.0, size),
            new Vertex(0.0, size, 0.0),
            new Vertex(0.0, 0.0, 0.0 )
          ]
        }
      ),

  		// TOP
      new Triangle(
        {
          vertices : [
            new Vertex(0.0, size, 0.0),
            new Vertex(0.0, size, size),
            new Vertex(size, size, size )
          ]
        }
      ),
      new Triangle(
        {
          vertices : [
            new Vertex(0.0, size, 0.0),
            new Vertex(size, size, size),
            new Vertex(size, size, 0.0 )
          ]
        }
      ),

  		// BOTTOM
      new Triangle(
        {
          vertices : [
            new Vertex(size, 0.0, size),
            new Vertex(0.0, 0.0, size),
            new Vertex(0.0, 0.0, 0.0 )
          ]
        }
      ),
      new Triangle(
        {
          vertices : [
            new Vertex(size, 0.0, size),
            new Vertex(0.0, 0.0, 0.0),
            new Vertex(size, 0.0, 0.0 )
          ]
        }
      )

    ]

    super({triangles})
  }

}
