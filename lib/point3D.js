class Point3D{

  constructor(options = {}){
    if(Array.isArray(options)){
      this.x = options[0];
      this.y = options[1];
      this.z = options[2];
    }else{
      this.x = options.x;
      this.y = options.y;
      this.z = options.z;
    }
  }

  get matrix(){
    return [this.x,this.y,this.z]
  }

}
