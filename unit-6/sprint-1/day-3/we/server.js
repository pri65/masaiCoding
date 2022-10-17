const express = require("express")

const app = express();

app.use(express.json())

app.get("/", (req,res) => {
    res.send("welcome to our homepage")
})

app.get("/profile", (req,res) => {
    res.send("profile page")
})

app.post("/uploaddate", (req,res) => {
   FileSystem.appendFileSync("./data.txt", JSON.stringify(req.body), {encoding:"utf-8"})
   res.send("thanks")
})




//for crud app

//to get data
app.get("/products", (req,res) => {
    res.send("here are your products")
})

//to add an item
app.post("/addProducts", (req,res) => {
    res.send(" your products was added")
})

// app.listen(8080);
//or we can write the above as
//this way will show you what is goin on in your app
app.listen(8500, () => [
    console.log("Listening on port 8080")
])