import Mesh from './Mesh'

class Cube extends Mesh{

  constructor(options = {}){

    const { size = 1.0 } = options

    let triangles = [

      // SOUTH
  		new Triangle(
        {
          vertices : [
            new Vertex({x: 0.0, y:0.0, z : 0.0}),
            new Vertex({x: 0.0, y:size,z :  0.0}),
            new Vertex({x: size, y:size,z :  0.0})
          ]
        }
      ),
      new Triangle(
        {
          vertices : [
            new Vertex({x: 0.0, y:0.0, z : 0.0}),
            new Vertex({x: size, y:size,z :  0.0}),
            new Vertex({x: size, y:0.0, z : 0.0})
          ]
        }
      ),

  		// EAST
      new Triangle(
        {
          vertices : [
            new Vertex({x: size, y:0.0, z : 0.0}),
            new Vertex({x: size, y:size,z :  0.0}),
            new Vertex({x: size, y:size,z :  size})
          ]
        }
      ),
      new Triangle(
        {
          vertices : [
            new Vertex({x: size, y:0.0, z : 0.0}),
            new Vertex({x: size, y:size,z :  size}),
            new Vertex({x: size, y:0.0, z : size })
          ]
        }
      ),

  		// NORTH
      new Triangle(
        {
          vertices : [
            new Vertex({x: size, y:0.0, z : size}),
            new Vertex({x: size, y:size,z :  size}),
            new Vertex({x: 0.0, y:size,z :  size })
          ]
        }
      ),
      new Triangle(
        {
          vertices : [
            new Vertex({x: size, y:0.0, z : size}),
            new Vertex({x: 0.0, y:size,z :  size}),
            new Vertex({x: 0.0, y:0.0, z : size })
          ]
        }
      ),


  		// WEST
      new Triangle(
        {
          vertices : [
            new Vertex({x: 0.0, y:0.0, z : size}),
            new Vertex({x: 0.0, y:size,z :  size}),
            new Vertex({x: 0.0, y:size,z :  0.0 })
          ]
        }
      ),
      new Triangle(
        {
          vertices : [
            new Vertex({x: 0.0, y:0.0, z : size}),
            new Vertex({x: 0.0, y:size,z :  0.0}),
            new Vertex({x: 0.0, y:0.0, z : 0.0 })
          ]
        }
      ),

  		// TOP
      new Triangle(
        {
          vertices : [
            new Vertex({x: 0.0, y:size,z :  0.0}),
            new Vertex({x: 0.0, y:size,z :  size}),
            new Vertex({x: size, y:size,z :  size })
          ]
        }
      ),
      new Triangle(
        {
          vertices : [
            new Vertex({x: 0.0, y:size,z :  0.0}),
            new Vertex({x: size, y:size,z :  size}),
            new Vertex({x: size, y:size,z :  0.0 })
          ]
        }
      ),

  		// BOTTOM
      new Triangle(
        {
          vertices : [
            new Vertex({x: size, y:0.0, z : size}),
            new Vertex({x: 0.0, y:0.0, z : size}),
            new Vertex({x: 0.0, y:0.0, z : 0.0 })
          ]
        }
      ),
      new Triangle(
        {
          vertices : [
            new Vertex({x: size, y:0.0, z : size}),
            new Vertex({x: 0.0, y:0.0, z : 0.0}),
            new Vertex({x: size, y:0.0, z : 0.0 })
          ]
        }
      )

    ]

    super({triangles})
  }

}

export default Cube
