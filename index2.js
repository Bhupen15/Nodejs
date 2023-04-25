const express = require('express');

require('./config');

const product = require('./product');

const app = express();

app.use(express.json());

app.post("/create", async (req, res) => {
    let data = new product(req.body);
    let result = await data.save();
    res.send(result);

    console.log(result);
});

app.get("/list", async (req, res) => {


    let result = await product.find();

    res.send(result);
    console.log(result);
})


app.delete("/delete/:_id", async (req, res) => {


    let data = await product.deleteOne(req.params);

    res.send(data);

})

app.put("/update/:_id", async (req, res) => {
    let data = await product.updateOne(
        req.params, {
        $set: req.body
    }
    );
    res.send(data);
})

app.get("/search/:brand", async (req, res) => {
    console.log(req.params.brand);
    let data = await product.find(
       { "$or": [
        { "brand": { $regex: req.params.brand } },
        { "price": { $regex: req.params.brand } }
    ]}
    );
    res.send(data);
})

app.listen(5000);