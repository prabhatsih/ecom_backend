const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema =  new Schema({
    thumbnail: String,
    title: String,
    description: String,
    brand: String,
    price: Number,
    discount: Number,
    category: String
})

const productModel = mongoose.model("Product", productSchema)
module.exports = productModel