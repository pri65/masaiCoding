const express = require("express");
const app = express();
const dns2 = require('dns2');
const fs = require('fs');
const dns = new dns2();
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json());
const data = fs.readFileSync('products.json');
const myProduct= JSON.parse(data);
app.post("/getmeip", async(req, res) => {
    const { website_name } = req.body;
    try {
        const result = await dns.resolveA(website_name);
        console.log(result)
        res.send(result.answers[0].address)
    } catch (error) {
    }
})
app.get("/products", (req,res) => {
    res.send(myProduct.products)
})
app.post("/products/create", (req,res) => {
    const {product} = req.body;
    console.log(req.body)
    try {
        myProduct.products.push({
            id: myProduct.products.length+1,
            product: product
        })
        res.send(myProduct.products)
    } catch (error) {
        res.send(error)
    }
})
app.put("/products/:productId", (req,res) => {
    const { productId } = req.params;
    var item = myProduct.products.find(item => item.id === productId);
})
app.delete("/products/:productId", (req,res) => {
})
app.listen(3000, function () {
  console.log("listening on 3000");
});