const express = require("express")

const app = express()


//function -> which has access to request object, response object and next() 
app.use((req,res,next) => {
    //start time
    next() //after this execution is done
    //end time

    //time taken = end time- start time
})

app.get("/", (req,res) => {
    res.send("welcome")
})

app.get("/about", (req,res) => {
    res.send("welcome to about page")
})

app.get("/contact", (req,res) => {
    console.log("1")
    res.send("contact details are here")
})

app.listen(8080, () => {
    console.log("app is running")
})
