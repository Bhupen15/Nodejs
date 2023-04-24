const dbConnect = require('./mongodb');



const insert = async () => {

    const db = await dbConnect();

    const result = await db.insertMany(

        [{
            brand: 'realme',
            price: 14000,
            warranty: 3
        },
        {
            brand: 'Nokia',
            price: 14000,
            warranty: 3
        }]

    );
    console.log(result);

    if (result.acknowledged) {
        console.log("Data inserted")
    }
}


insert();