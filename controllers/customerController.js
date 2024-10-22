import Customer from "../models/Customer.js"; 

// Get all customers
export const getCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch customers" });
    }
};

// Add a new customer
export const addCustomer = async (req, res) => {
    const { customer_first_name, customer_surname, phone_number, cellphone_number, email_address, other_customer_details } = req.body;
    try {
        const customer = new Customer({
            customer_first_name,
            customer_surname,
            phone_number,
            cellphone_number,
            email_address,
            other_customer_details
        });
        await customer.save();
        res.status(201).json(customer);
    } catch (error) {
        res.status(500).json({ error: "Failed to add customer" });
    }
};

// Get a single customer by ID
export const getSingleCustomer = async (req, res) => {
    const { id } = req.params;
    try {
        const customer = await Customer.findById(id);
        if (!customer) {
            return res.status(404).json({ error: "Customer not found" });
        }
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch customer" });
    }
};

// Update a customer by ID
export const updateCustomer = async (req, res) => {
    const { id } = req.params;
    const { customer_first_name, customer_surname, phone_number, cellphone_number, email_address, other_customer_details } = req.body;
    try {
        const updatedCustomer = await Customer.findByIdAndUpdate(
            id,
            { customer_first_name, customer_surname, phone_number, cellphone_number, email_address, other_customer_details },
            { new: true }
        );
        if (!updatedCustomer) {
            return res.status(404).json({ error: "Customer not found" });
        }
        res.status(200).json(updatedCustomer);
    } catch (error) {
        res.status(500).json({ error: "Failed to update customer" });
    }
};


