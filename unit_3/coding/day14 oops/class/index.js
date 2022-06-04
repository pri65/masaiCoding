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

