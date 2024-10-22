import Order from '../models/Order.js';

// Create a new Order
export const createOrder = async (req, res) => {
    try {
        const { table, staff, customer, booking } = req.body;
        const newOrder = new Order({ table, staff, customer, booking });
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all Orders
export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('table staff customer booking');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single Order by ID
export const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('table staff customer booking');
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an Order by ID
export const updateOrder = async (req, res) => {
    try {
        const { table, staff, customer, booking } = req.body;
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            { table, staff, customer, booking },
            { new: true }
        );
        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

