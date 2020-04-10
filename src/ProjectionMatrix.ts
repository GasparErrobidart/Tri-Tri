import Matrix from './Matrix'

class ProjectionMatrix extends Matrix{

  constructor(options){
    super(options)
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

    this.update()

  }

  update(){
    const
    aspectRatio = this.height / this.width,
    fovRad = 1.0 / Math.tan( this.fieldOfView * 0.5 / 180.0 * 3.14159 )
    this.values[0][0] = aspectRatio * fovRad;
    this.values[1][1] = fovRad;
    this.values[2][2] = this.far / (this.far - this.near);
    this.values[3][2] = (-this.far * this.near) / (this.far - this.near);
    this.values[2][3] = 1.0;
    this.values[3][3] = 0.0;
  }

}

export default ProjectionMatrix
