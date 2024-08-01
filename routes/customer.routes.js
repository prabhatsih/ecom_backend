const express = require("express")
const { fetchCustomer, createCustomer, updateCustomer, deleteCustomer } = require("../controller/customer.controller")

const router = express.Router()

router.get('/', fetchCustomer)

router.post('/', createCustomer)

router.put('/', updateCustomer);

router.delete('/', deleteCustomer);

module.exports = router