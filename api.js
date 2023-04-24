const express = require('express');

const dbConnect = require('./mongodb');

const mongodb = require('mongodb');


const app = express();

app.use(express.json());

app.get('/', async (req, res) => {

    let data = await dbConnect();

    data = await data.find().toArray();

    res.send(data);

    console.log(data);

});

app.post("/", async (req, res) => {

    // console.log(req.body)
    let data = await dbConnect();

    let result = await data.insertOne(req.body);

    res.send(result);

});

app.put("/:brand", async (req, res) => {

    // console.log(req.body);

    let data = await dbConnect();

    let result = await data.updateOne({
        //   brand: req.body.brand
        brand: req.params.brand

    }, {
        $set: req.body
    })
    res.send({ result: "update" });
})

app.delete("/:id", async (req, res) => {
    //   console.log(req.params.id);

    const data = await dbConnect();
    const result = await data.deleteOne({
        _id: new mongodb.ObjectId(req.params.id)
    })
    res.send(result);
})
app.listen(5000);