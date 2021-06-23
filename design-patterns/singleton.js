var Singleton = /** @class */ (function () {
    // instanceID: number;
    // getInstance: () => Singleton;
    // init(value: number) {
    //   this.instanceID = value;
    //   this.getInstance = () => Singleton.instance;
    //   return this
    // }
    function Singleton() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        this.member = 0;
        Singleton.instance = this;
    }
    return Singleton;
}());
var test = new Singleton();
console.log(test);
