const fetchOrder = (req, res) => {
    res.send("Fetch Order");
}

const createOrder = (req, res) => {
    res.send("Create Order");
}

const updateOrder = (req, res) => {
    res.send("Update Order");
}

const deleteOrder = (req, res) => {
    res.send("Delete Order");
}

module.exports = {
    fetchOrder,
    createOrder,
    updateOrder,
    deleteOrder
}