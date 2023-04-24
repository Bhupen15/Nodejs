const dbConnect = require('./mongodb');

const updateData = async () => {

    let data = await dbConnect();
    let result = await data.updateMany(
        { brand: 'BlackBerry' },
        {
            $set: { brand: 'Asus', warranty: 4 }
        }
    );

    console.log(result);
};

updateData();