const express = require("express");
const router = express.Router();

const {
    fetchPayment,
    createPayment,
    updatePayment,
    deletePayment,
} = require('../controller/payment.controller')

router.get('/',fetchPayment)

router.post('/',createPayment)

router.put('/',updatePayment)

router.delete('/',deletePayment);

module.exports = router