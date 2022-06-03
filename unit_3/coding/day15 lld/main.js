//lld:- low level design
//high level design
//road:- head of village(lld)
//nh:- nititin gatkari(hld)
//parking system

class vehicle{
    constructor(type,regNumber,color) {
        this.type=type;
        this.regNumber=regNumber;
        this.color=color;
    }

    get type() {
        return this.type;
    }

    set type(value) {
        this._type=value;
    }
}

//car
class Car extends Vehicle {
    constructor(regNumber,color) {
        super("car", regNumber,color);
    }
}

//bike
class Bike extends Vehicle {
    constructor(regNumber,color) {
        super("bike", regNumber,color);
    }
}

//truck
class Truck extends Vehicle {
    constructor(regNumber,color) {
        super("truck", regNumber,color);
    }
}

//perking spots
class Slot{
    constructor(type,number){
        this.number=number;
        this.type=type;
        
    }
}