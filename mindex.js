const mongoose = require('mongoose');



mongoose.connect("mongodb://localhost:27017/bhupen");

const ProductSchema = new mongoose.Schema({
    brand: String,
    price: Number,
    warranty: Number
});

const saveINDB = async () => {


    const ProductModel = mongoose.model('node-bhupen', ProductSchema);

    let data = new ProductModel({
        brand: "Note 12 pro",
        price: 2000,
        warranty: 12
    });

    let result = await data.save();
    console.log(result);
}

// saveINDB();

const updateInDB = async() =>{

    const ProductModel = mongoose.model('node-bhupen', ProductSchema);
   let data = await ProductModel.updateMany(
    {
       brand:  "Note 12 pro"
    },
    {$set: {price: 70000, brand: "Note 15 pro"}}
   )
 
}

// updateInDB();

const deleteInDB = async()=>{

    const ProductModel = mongoose.model('node-bhupen', ProductSchema);

    let data = await ProductModel.deleteOne({brand: "Note 15 pro"})
}

// deleteInDB();

const findInDB = async()=>{

    const ProductModel= mongoose.model('node-bhupen', ProductSchema);

    let data = await ProductModel.find({brand: "Realme 3 pro"});

    console.log(data);
}

findInDB();