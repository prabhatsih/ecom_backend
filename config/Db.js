const mongoose = require("mongoose")
const MongoDbURl = "mongodb://localhost:27017/ecom"


const ConnectDb = async()=>{
    try {
        await mongoose.connect(MongoDbURl)
        console.log(`Database Connected Successful`)
    } catch (error) {
        console.error(`Database Connected Failed` + error)

    }
}

module.exports = ConnectDb