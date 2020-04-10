import Mesh     from './Mesh'
import Triangle from './Triangle'
import Vector4   from './Vector4'

class Cube extends Mesh{

  constructor(options : any = {} ){

    const { size = 1.0 } = options

    let triangles : Triangle[] = [

      // SOUTH
  		new Triangle(
        {
          vertices : [
            new Vector4(0.0, 0.0,  0.0),
            new Vector4(0.0, size,  0.0),
            new Vector4(size, size,  0.0)
          ]
        }
      ),
      new Triangle(
        {
          vertices : [
            new Vector4(0.0, 0.0,  0.0),
            new Vector4(size, size,  0.0),
            new Vector4(size, 0.0,  0.0)
          ]
        }
      ),

  		// EAST
      new Triangle(
        {
          vertices : [
            new Vector4(size, 0.0,  0.0),
            new Vector4(size, size,  0.0),
            new Vector4(size, size,  size)
          ]
        }
      ),
      new Triangle(
        {
          vertices : [
            new Vector4(size, 0.0,  0.0),
            new Vector4(size, size,  size),
            new Vector4(size, 0.0,  size )
          ]
        }
      ),

  		// NORTH
      new Triangle(
        {
          vertices : [
            new Vector4(size, 0.0,  size),
            new Vector4(size, size,  size),
            new Vector4(0.0, size,  size )
          ]
        }
      ),
      new Triangle(
        {
          vertices : [
            new Vector4(size, 0.0,  size),
            new Vector4(0.0, size,  size),
            new Vector4(0.0, 0.0,  size )
          ]
        }
      ),


  		// WEST
      new Triangle(
        {
          vertices : [
            new Vector4(0.0, 0.0,  size),
            new Vector4(0.0, size,  size),
            new Vector4(0.0, size,  0.0 )
          ]
        }
      ),
      new Triangle(
        {
          vertices : [
            new Vector4(0.0, 0.0,  size),
            new Vector4(0.0, size,  0.0),
            new Vector4(0.0, 0.0,  0.0 )
          ]
        }
      ),

  		// TOP
      new Triangle(
        {
          vertices : [
            new Vector4(0.0, size,  0.0),
            new Vector4(0.0, size,  size),
            new Vector4(size, size,  size )
          ]
        }
      ),
      new Triangle(
        {
          vertices : [
            new Vector4(0.0, size,  0.0),
            new Vector4(size, size,  size),
            new Vector4(size, size,  0.0 )
          ]
        }
      ),

  		// BOTTOM
      new Triangle(
        {
          vertices : [
            new Vector4(size, 0.0,  size),
            new Vector4(0.0, 0.0,  size),
            new Vector4(0.0, 0.0,  0.0 )
          ]
        }
      ),
      new Triangle(
        {
          vertices : [
            new Vector4(size, 0.0,  size),
            new Vector4(0.0, 0.0,  0.0),
            new Vector4(size, 0.0,  0.0 )
          ]
        }
      )

    ]

    super({triangles})
  }

}

export default Cube
