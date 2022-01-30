var db = require('../config/connection')

module.exports={
    addProducts:(products)=>{
        console.log(products);
        db.get().collection('product').insertOne(products).then((data)=>{
            callback(true)

        })
    }
}