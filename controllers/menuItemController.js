import MenuItem from '../models/MenuItem.js';

// Create a new MenuItem
export const createMenuItem = async (req, res) => {
    try {
        const { menu_item_description, menu_item_price } = req.body;
        const newMenuItem = new MenuItem({ menu_item_description, menu_item_price });

        await newMenuItem.save();
        res.status(201).json(newMenuItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all MenuItems
export const getAllMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.status(200).json(menuItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a MenuItem by ID
export const getMenuItemById = async (req, res) => {
    try {
        const menuItem = await MenuItem.findById(req.params.id);
        if (!menuItem) {
            return res.status(404).json({ message: 'MenuItem not found' });
        }
        res.status(200).json(menuItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


