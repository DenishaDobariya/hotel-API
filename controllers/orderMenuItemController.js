import OrderMenuItem from '../models/OrderMenuItem.js';

// Create OrderMenuItem
export const createOrderMenuItem = async (req, res) => {
    try {
        const { order, menu_item, order_menu_item_quantity, order_menu_item_comments } = req.body;
        const newOrderMenuItem = new OrderMenuItem({ order, menu_item, order_menu_item_quantity, order_menu_item_comments });
        await newOrderMenuItem.save();
        res.status(201).json(newOrderMenuItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all OrderMenuItems
export const getAllOrderMenuItems = async (req, res) => {
    try {
        const orderMenuItems = await OrderMenuItem.find().populate('order menu_item');
        res.status(200).json(orderMenuItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get OrderMenuItem by ID
export const getOrderMenuItemById = async (req, res) => {
    try {
        const orderMenuItem = await OrderMenuItem.findById(req.params.id).populate('order menu_item');
        if (!orderMenuItem) return res.status(404).json({ message: 'Order Menu Item not found' });
        res.status(200).json(orderMenuItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update OrderMenuItem
export const updateOrderMenuItem = async (req, res) => {
    try {
        const { order, menu_item, order_menu_item_quantity, order_menu_item_comments } = req.body;
        const updatedOrderMenuItem = await OrderMenuItem.findByIdAndUpdate(
            req.params.id,
            { order, menu_item, order_menu_item_quantity, order_menu_item_comments },
            { new: true }
        );
        if (!updatedOrderMenuItem) return res.status(404).json({ message: 'Order Menu Item not found' });
        res.status(200).json(updatedOrderMenuItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


