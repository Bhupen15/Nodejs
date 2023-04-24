const mongoose = require('mongoose');

const main = async () => {

    await mongoose.connect("mongodb://localhost:27017/bhupen");

    const ProductSchema = new mongoose.Schema({
        brand: String,
        price: Number
    });
  
  
    const ProductModel123 =  mongoose.model('node-bhupen', ProductSchema);

    

    let data = new ProductModel123({ brand: "Micromax", price: 1000 });
    console.log(typeof data);
    let result = await data.save();
    console.log(result);
}


main()