class Singleton{
  static instance : Singleton = undefined;
  instanceID: number;
  getInstance: () => Singleton;

  init(value: number) {
    this.instanceID = value;
    this.getInstance = () => Singleton.instance;
    return this
  }

  constructor(value: number) {
    if (Singleton.instance === undefined) {

      Singleton.instance = this.init(value);
    }
    return Singleton.instance;
  }

}