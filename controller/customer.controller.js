const fetchCustomer = (req, res) => {
    res.send("Fetch Customer");
}

const createCustomer = (req, res) => {
    res.send("Create Customer");
}

const updateCustomer = (req, res) => {
    res.send("Update Customer");
}

const deleteCustomer = (req, res) => {
    res.send("Delete Customer");
}

module.exports = {
    fetchCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer
}