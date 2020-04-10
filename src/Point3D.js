class Point3D{

  constructor(options = {}){

    if(Array.isArray(options)){
      let [x=0, y=0, z=0] = options;
      this.x = x;
      this.y = y;
      this.z = z;
    }else{
      let {x=0, y=0, z=0} = options;
      this.x = x;
      this.y = y;
      this.z = z;
    }

  }

  get matrix(){
    return [this.x,this.y,this.z]
  }

}
