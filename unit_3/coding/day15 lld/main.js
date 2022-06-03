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

//parking spots
class Slot{
    constructor(type,number){
        this.number=number;
        this.type=type;
        this._isBooked=false;
    }

    get isBooked(){
        return this._isBooked;
    }

    set isBooked(value) {
        this._isBooked=value;
    }
}

//Individual floors
class parkingFloor {
    constructor(floorNumber, maxSpots) {
        this.floorNumber=floorNumber;
        this.parkingSpots=[];

        for(let i=0; i<maxSpots; i++)
        {
            if(i===0)
            {
                this._parkingSpots.push(new Slot("car",i));
            }
        }
    }
}