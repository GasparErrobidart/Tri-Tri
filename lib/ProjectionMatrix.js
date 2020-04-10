class ProjectionMatrix{

  constructor(options){
    const {
      width,
      height,
      fieldOfView = 90.0,
      near        = 0.1,
      far         = 1000.0
    } = options;

    this.width        = width
    this.height       = height
    this.fieldOfView  = fieldOfView
    this.near         = near
    this.far          = far

    // Projection Matrix
    this.matrix = [
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0]
    ]

    this.update()

  }

  update(){
    const
    aspectRatio = this.height / this.width,
    fovRad = 1.0 / Math.tan(
      this.fieldOfView * 0.5 / 180.0 * 3.14159
    )

    this.matrix[0][0] = aspectRatio * fovRad;
    this.matrix[1][1] = fovRad;
    this.matrix[2][2] = this.far / (this.far - this.near);
    this.matrix[3][2] = (-this.far * this.near) / (this.far - this.near);
    this.matrix[2][3] = 1.0;
    this.matrix[3][3] = 0.0;
  }

}
