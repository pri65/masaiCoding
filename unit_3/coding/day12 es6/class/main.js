//why cf?
//we use cf to make objects and to avoid DRY(repeatation)

//  {
//         name: "",
//         print: function(){
//             console.log(this.name);
//         }
//     }

//NOW MAKE A CF WHICH WILL MAKE ABOVE KIND OF OBJECT
//1. TRADITIONAL WAY
// function Person(n) {
//   this.name = n;
// }
// Person.prototype.print = function () {
//   console.log(this.name);
// };
// let p1 = new Person("Anu");
// console.log(p1);
//output=Person{name:'Anu'}

//2. ES6
// class Person {
//   constructor(n) {
//     this.name = n;
//   }
//   print() {
//     console.log(this.name);
//   }
// }
// let p1 = new Person("Anu");
// console.log(p1);
//output=Person{name:'Anu'}


//1. FUNCTIONAL PROGRAMMING
//IN THIS FUNCTIONS ARE THE PRIMARY WAY TO WRITE A PROGRAM
// let str = "Pizza";
// function pizza(){
//     return "Pizza";
// }
// let str = pizza();

//Append
// let div = create('div');
// function create(n) {
//   return document.createElement(n);
// }


//2. OBJECT ORIENTED PROGRAMMING
// let recipe = {
//   items: ["Butter", "Paneer"],
//   cook: function () {
//     console.log(`cooking ${this.items[0]} ${this.items[1]}`);
//   },
// };
// recipe.cook();
// function items() {
//   return ["Butter", "Paneer"];
// }
// function cook() {
//   let i = items();
//   console.log(`cooking ${i[0]} ${i[1]}`);
// }
// cook();
