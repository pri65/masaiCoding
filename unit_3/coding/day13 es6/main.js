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
 
