// Inheritance
// Object.create(), prototype inheritance

class Mobile {
  // Blueprint
  constructor(b, bt) {
    this.brand = b;
    this.calling = true;
    this.battery = bt;
    //200 properties that are common
  }
}

let m1 = new Mobile("iPhone", 5000);
console.log(m1);

class SmartPhone extends Mobile {
  constructor(b, bt, c, s) {
    super(b, bt);
    this.camera = c;
    this.screeSize = s;
  }
}

let m2 = new SmartPhone("iphone", 5000, "20px", "6inch");
console.log(m2);

function constructor(a,b){
    let A = a;
    let B = b;
}

constructor(a,b);