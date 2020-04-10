class Point3D{

  x : Number;
  y : Number;
  z : Number;

  constructor(cordinates : any = {}){

    if(Array.isArray(cordinates)){
      let [x=0, y=0, z=0] = cordinates;
      this.x = x;
      this.y = y;
      this.z = z;
    }else{
      let {x=0, y=0, z=0} = cordinates;
      this.x = x;
      this.y = y;
      this.z = z;
    }

  }

  get matrix(){
    return [this.x,this.y,this.z]
  }

}

export default Point3D
