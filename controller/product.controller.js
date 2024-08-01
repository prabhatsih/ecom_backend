const Product = require("../model/product.model")

const fetchProduct = async (req, res) => {
    // res.send("Get Success")
    try{
        const products = await Product.find();
        res.status(200).json(products);
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}
const createProduct = async (req, res) => {
    try{
        // console.log(req.body)
        const newProduct = new Product(req.body)
        await newProduct.save()
        res.status(200).json(newProduct)
    }
    catch(err)
    {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}
const updateProduct = async (req, res) => {
    // res.send("Put Success")
    console.log(req.file)
    try{
        const id = req.params.id
        const data = req.body
        await Product.findByIdAndUpdate(id, data)
        res.status(200).json({success: true})
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}
const deleteProduct = async (req, res) => {
    // res.send("Delete Success")
    try{
    const id = req.params.id
    await Product.findByIdAndDelete(id)
    res.status(200).json({success: true})
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

module.exports = {fetchProduct, createProduct, updateProduct, deleteProduct}