class Car {
constructor(brand){
    this._brand = brand;
}
getBrand(){
    return this._brand;
}
setBrand(value){
    this._brand= value
}
};

class Triple{
    static triple(a){
        return a*3;
    }
};

class sportscar extends Car{
    constructor(...args){
        super(...args);
    }
    isFast(){
        return true;
    }
}

Triple.triple(3);

const aCar = new Car();
console.log(typeof Car);

const bCar = new Car('Celta');
console.log(bCar.brand)
