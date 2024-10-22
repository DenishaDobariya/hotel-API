import MenuItemIngredient from '../models/MenuItemIngredient.js';

// Create a new MenuItemIngredient
export const createMenuItemIngredient = async (req, res) => {
    try {
        const { menu_item, ingredient, item_quantity } = req.body;
        const newMenuItemIngredient = new MenuItemIngredient({ menu_item, ingredient, item_quantity });
        await newMenuItemIngredient.save();
        res.status(201).json(newMenuItemIngredient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all MenuItemIngredients
export const getAllMenuItemIngredients = async (req, res) => {
    try {
        const menuItemIngredients = await MenuItemIngredient.find().populate('menu_item ingredient');
        res.status(200).json(menuItemIngredients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single MenuItemIngredient by ID
export const getMenuItemIngredientById = async (req, res) => {
    try {
        const menuItemIngredient = await MenuItemIngredient.findById(req.params.id).populate('menu_item ingredient');
        if (!menuItemIngredient) {
            return res.status(404).json({ message: 'MenuItemIngredient not found' });
        }
        res.status(200).json(menuItemIngredient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a MenuItemIngredient by ID
export const updateMenuItemIngredient = async (req, res) => {
    try {
        const { menu_item, ingredient, item_quantity } = req.body;
        const updatedMenuItemIngredient = await MenuItemIngredient.findByIdAndUpdate(
            req.params.id,
            { menu_item, ingredient, item_quantity },
            { new: true }
        );
        if (!updatedMenuItemIngredient) {
            return res.status(404).json({ message: 'MenuItemIngredient not found' });
        }
        res.status(200).json(updatedMenuItemIngredient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a MenuItemIngredient by ID
export const deleteMenuItemIngredient = async (req, res) => {
    try {
        const deletedMenuItemIngredient = await MenuItemIngredient.findByIdAndDelete(req.params.id);
        if (!deletedMenuItemIngredient) {
            return res.status(404).json({ message: 'MenuItemIngredient not found' });
        }
        res.status(200).json({ message: 'MenuItemIngredient deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
