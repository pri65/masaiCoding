class Car {
    constructor(n,b) {
        this.name=n; 
        this.brand=b;
    }

    showDetails() {
        console.log(`${this.name} ${this.brand}`);
    }
}

class SUV extends Car {
    constructor(x,y) {
        super(x,y);

        this.buyer="Anu";
    }
}

class miniSUV extends SUV {
    constructor(x,y) {
        super(x,y);

        this.type="mini-suv";
    }
}

var car2=new miniSUV("duster","renault");
console.log(car2);
//output=miniSUV{name:'duster',brand:'renault',buyer:'anu',type:'mini-SUV'}