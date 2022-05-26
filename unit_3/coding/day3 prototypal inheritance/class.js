// What is inheritance?
// Eyes color in your family
// Height
// Baldness
// Parents Property
// Homosapians ----> Monkey

// Why Inheritance?

// Cat family :- Tiger, lion, panther, leopard, cheetah

const cat = {
  name: "cat",
  legs: 4,
  fur: true,
  tail: true,
  type: "animal",
};

const tiger = {
  name: "tiger",
  legs: 4,
  fur: true,
  tail: true,
  type: "animal",
};

const lion = {
  name: "lion",
  legs: 4,
  fur: true,
  tail: true,
  type: "animal",
};

const tiger = Object.create(cat);
tiger.name = "tiger";
console.log(tiger);

const student = {
  batch: "web 18",
  institute: "Masai School",
  unit: 3,
  course: "FSWD",
};

const s1 = Object.create(student, { name: { value: "sanjay" } });
// s1.name = "sanjay";
console.log(s1);

Nike product (brand, logo, seller) --- from flipkart

const product = {
  brand: "Nike",
  logo: "url",
  seller: "Flipkart",
};

let p1 = Object.create(product);
console.log(p1);

Constructor function
Create a constructor function to create the blueprint

function Product(type) {
  this.type = type;
  this.brand = "nike";
  (this.logo = "URL"), (this.seller = "Flipkart");
}

Product.prototype.discount = function () {
  console.log("50% discount");
};

Product.prototype.changeType = function (type) {
  this.type = type;
};

Product.prototype.price = 1000;

function discount () {
  console.log("50% discount");
};

Call, apply ----> Temporary
Prototype ------> Permanent

let p1 = new Product("shoe");

let p2 = new Product("Sneakers");

console.log(p1);
p1.changeType("t-shirt");
console.log(p1);
console.log(p2);

let arr = [1, 2, 3];
let arr2 = new Array(1, 2, 3);
// console.log(arr2);

function myArray() {
  Object.defineProperty(this, "length", {
    value: 0,
    writable: true,
    enumerable: false,
  });

  this.length = arguments.length;

  for (let i = 0; i < arguments.length; i++) {
    this[i] = arguments[i];
  }
}

function myArray() {
  this.length = arguments.length;

  for (let i = 0; i < arguments.length; i++) {
    this[i] = arguments[i];
  }
}

// let arr3 = new myArray(1, 2, 3, 4, 5);

// // console.log(Object.values(arr3));

// arr = [1,2,3,4];
//length = 4;
// push(6) ---> index 4

// myArray.prototype.पुश = function (value) {
//   this[this.length] = value;
//   this.length++;
// };

// myArray.prototype.हटाओ = function () {
//   delete this[this.length - 1];
//   this.length--;
// };

// myArray.prototype.छापो = function () {
//   console.log(Object.values(this));
// };

// arr3.हटाओ();
// arr3.पुश(7);
// arr3.पुश(8);

// arr3.छापो();

// let grandfather = {
//   height: "tall",
// };

// let father = Object.create(grandfather);

// let son = Object.create(father);
// son.name = "babu bhaiya";

// console.log(son);

// Prototype chaining

// [1,2,3,4,5]
// remove(2);

// function func() {
//   console.log(arguments);
//   console.log(arguments.length);
// }

// func("a", "b", "c", "d");