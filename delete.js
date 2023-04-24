const dbConnect = require('./mongodb');


const deleteData =async()=>{

    let data = await dbConnect();
     let result = await data.deleteOne({brand:'Nokia'});
     console.log(result);

     
   
}

deleteData();