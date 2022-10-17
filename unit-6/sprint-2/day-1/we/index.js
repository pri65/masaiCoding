const express = require("express")
const fs = require("fs");

const app = express()


//function -> which has access to request object, response object and next() 

//callback function - any function that is passed as an argument to other function is called a callback function

//custom middleware
const timeLogger = (req,res,next) => {
    //start time
    const startTime = new Date().getTime();
    next() //after this execution is done
    //end time
  const endTime = new Date().getTime();
  console.log(endTime-startTime + "ms")
    //time taken = end time- start time
}

const urlLogger = (req,res,next) => {
    re
}

app.use(timeLogger)

app.get("/", (req,res) => {
    res.send("welcome")
})

app.get("/about", (req,res) => {
    res.send("welcome to about page")
})

app.get("/contact", (req,res) => {
    const file = fs.readFileSync("./package.json", {encoding:"utf-8"})
   setTimeout(() => {
    res.send(file)
   },1000)
})

app.listen(8080, () => {
    console.log("app is running")
})
