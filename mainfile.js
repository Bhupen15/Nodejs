const dbConnect = require('./mongodb');

const main = async () => {

    let data = await dbConnect();
    data = await data.find({ brand: 'samsung' }).toArray();

    console.log(data);

}

main(); 