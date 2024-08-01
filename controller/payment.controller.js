const fetchPayment = (req, res) => {
    res.send("Fetch Payment");
}

const createPayment = (req, res) => {
    res.send("Create Payment");
}

const updatePayment = (req, res) => {
    res.send("Update Payment");
}

const deletePayment = (req, res) => {
    res.send("Delete Payment");
}

module.exports = {
    fetchPayment,
    createPayment,
    updatePayment,
    deletePayment
}