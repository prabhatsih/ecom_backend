const express = require("express");
const router = express.Router();

const {
    fetchProduct,
    createProduct,
    updateProduct,
    deleteProduct,
} = require('../controller/product.controller')

router.get('/',fetchProduct)

router.post('/',createProduct)

router.put('/:id',updateProduct)

router.delete('/:id',deleteProduct);

module.exports = router