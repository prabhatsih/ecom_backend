const mongoose = require("mongoose")
const MongoDbURl = "mongodb+srv://prabhats1410:9HuLL8cKLZDV66uu@cluster0.xtwhygp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


const ConnectDb = async()=>{
    try {
        await mongoose.connect(MongoDbURl)
        console.log(`Database Connected Successful`)
    } catch (error) {
        console.error(`Database Connected Failed` + error)

    }
}

module.exports = ConnectDb