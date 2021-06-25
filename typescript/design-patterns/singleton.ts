class Singleton{
  private static instance : Singleton ;
  // instanceID: number;
  // getInstance: () => Singleton;

  // init(value: number) {
  //   this.instanceID = value;
  //   this.getInstance = () => Singleton.instance;
  //   return this
  // }

  constructor() {
    if (Singleton.instance) {

   return   Singleton.instance ;
    }
  
    this.member = 0;
    Singleton.instance = this
  }
  member: number;
}

let test = new Singleton();
console.log(test);