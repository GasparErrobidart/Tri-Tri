import Vector4 from './Vector4'

class Triangle {

  vertices : Vector4[];

  constructor(options : any = {}){
    const { vertices = [new Vector4(),new Vector4(),new Vector4()] } = options
    if(!vertices || !Array.isArray(vertices) || vertices.length != 3){
      throw new Error("Triangle must have 3 vertices")
    }
    this.vertices = vertices
  }

  clipAgainstPlane(plane : Vector4, planeNormal : Vector4){
    const result = []
		// Make sure plane normal is indeed normal
		planeNormal = planeNormal.normalised()

		// Return signed shortest distance from point to plane, plane normal must be normalised
		function dist(p)
		{
			const n = p.normalised();
			return (planeNormal.x * p.x + planeNormal.y * p.y + planeNormal.z * p.z - planeNormal.dotProduct(plane));
		};

		// Create two temporary storage arrays to classify points either side of plane
		// If distance sign is positive, point lies on "inside" of plane
    let insidePoints = [];
    let insidePointsCount = 0;
    let outsidePoints = [];
    let outsidePointsCount = 0;

		// Get signed distance of each point in triangle to plane
		let d0 = dist(this.vertices[0]);
		let d1 = dist(this.vertices[1]);
		let d2 = dist(this.vertices[2]);

		if (d0 >= 0) { insidePoints[insidePointsCount++] = this.vertices[0]; }
		else { outsidePoints[outsidePointsCount++] = this.vertices[0]; }
		if (d1 >= 0) { insidePoints[insidePointsCount++] = this.vertices[1]; }
		else { outsidePoints[outsidePointsCount++] = this.vertices[1]; }
		if (d2 >= 0) { insidePoints[insidePointsCount++] = this.vertices[2]; }
		else { outsidePoints[outsidePointsCount++] = this.vertices[2]; }

		// Now classify triangle points, and break the input triangle into
		// smaller output triangles if required. There are four possible
		// outcomes...

		// if (insidePointsCount == 0)
		// {
			// All points lie on the outside of plane, so clip whole triangle
			// It ceases to exist

			// return 0; // No returned triangles are valid
		// }

		if (insidePointsCount == 3) {
			// All points lie on the inside of plane, so do nothing
			// and allow the triangle to simply pass through
			// out_tri1 = this;
      result.push(this)

			// return 1; // Just the one returned original triangle is valid
		}

		if (insidePointsCount == 1 && outsidePointsCount == 2) {
			// Triangle should be clipped. As two points lie outside
			// the plane, the triangle simply becomes a smaller triangle

			// Copy appearance info to new triangle
      const newTriangle = new Triangle()
      newTriangle.color = `rgba(0,0,${parseInt(255*this.luminance)},1.0)`
      newTriangle.luminance = this.luminance
			// The inside point is valid, so keep that...
			newTriangle.vertices[0] = insidePoints[0];

			// but the two new points are at the locations where the
			// original sides of the triangle (lines) intersect with the plane
			newTriangle.vertices[1] = plane.intersectPlane( planeNormal, insidePoints[0], outsidePoints[0]);
			newTriangle.vertices[2] = plane.intersectPlane( planeNormal, insidePoints[0], outsidePoints[1]);

			result.push(newTriangle)
		}

		if (insidePointsCount == 2 && outsidePointsCount == 1) {
			// Triangle should be clipped. As two points lie inside the plane,
			// the clipped triangle becomes a "quad". Fortunately, we can
			// represent a quad with two new triangles

      const newTriangle1 = new Triangle()
      const newTriangle2 = new Triangle()
      newTriangle1.color = `rgba(${parseInt(255*this.luminance)},0,0,1.0)`
      newTriangle1.luminance = this.luminance
      newTriangle2.color = `rgba(0,${parseInt(255*this.luminance)},0,1.0)`
      newTriangle2.luminance = this.luminance

			// The first triangle consists of the two inside points and a new
			// point determined by the location where one side of the triangle
			// intersects with the plane
			newTriangle1.vertices[0] = insidePoints[0];
			newTriangle1.vertices[1] = insidePoints[1];
			newTriangle1.vertices[2] = plane.intersectPlane( planeNormal, insidePoints[0], outsidePoints[0]);

			// The second triangle is composed of one of he inside points, a
			// new point determined by the intersection of the other side of the
			// triangle and the plane, and the newly created point above
			newTriangle2.vertices[0] = insidePoints[1];
			newTriangle2.vertices[1] = newTriangle1.vertices[2];
			newTriangle2.vertices[2] = plane.intersectPlane( planeNormal, insidePoints[1], outsidePoints[0]);
      result.push(newTriangle1)
      result.push(newTriangle2)
		}
    return result
	}

}

export default Triangle
