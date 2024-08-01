const express = require("express")
const { fetchOrder, createOrder, updateOrder, deleteOrder } = require("../controller/order.controller")

const router = express.Router()

router.get('/', fetchOrder)

router.post('/', createOrder)

router.put('/', updateOrder)

router.delete('/', deleteOrder);

module.exports = router