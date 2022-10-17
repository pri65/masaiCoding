// console.log("hello")

// //import

// //import x from y

// //const x = require("y") - CJS
// const [add,sub,mul,div] = require("./calc")

// console.log(add(2,3))
// // console.log(sub(5,3))
// // console.log(mul(2,3))
// // console.log(div(10,2))


// let arr = [1,2,3,4,5]
// const [x,y,z] = arr;
// console.log(z)


// //how to import/use os.version
// //as everything is already inside nodejs, so we will directly import it as
// const os = require("os")
// // console.log(os.version())
// console.log(os.cpus().length)


// // if we want to read some file 
// //fs = file system
// const fs = require("fs")
// const data = fs.readFileSync("./intro.txt", {encoding : "utf-8"})
// console.log(data)
// //using this way we can read any file in our system


// //now read file for asynchronous case
// const fs = require("fs")
// fs.readFile("./calc.js", { encoding : "utf-8" }, (err,data) => {
//     console.log(data)
// })


//if we want to check a number is even or not
//search npm on google
//then search for is even function
//if its there then install in your terminal
//then run code
const checkEven = require("is-even")
console.log(checkEven(2));