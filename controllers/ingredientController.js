import Ingredient from '../models/Ingredient.js'
import IngredientType from '../models/IngredientType.js'

// Create a new Ingredient
export const createIngredient = async (req, res) => {
    try {
        const { ingredient_name, ingredient_type } = req.body;
        const existingIngredientType = await IngredientType.findById(ingredient_type);
        if (!existingIngredientType) {
            return res.status(404).json({ message: 'Ingredient Type not found' });
        }

        const newIngredient = new Ingredient({ ingredient_name, ingredient_type });
        await newIngredient.save();
        res.status(201).json(newIngredient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all Ingredients
export const getAllIngredients = async (req, res) => {
    try {
        const ingredients = await Ingredient.find().populate('ingredient_type'); 
        res.status(200).json(ingredients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get an Ingredient by ID
export const getIngredientById = async (req, res) => {
    try {
        const ingredient = await Ingredient.findById(req.params.id).populate('ingredient_type');
        if (!ingredient) {
            return res.status(404).json({ message: 'Ingredient not found' });
        }
        res.status(200).json(ingredient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an Ingredient by ID
export const updateIngredient = async (req, res) => {
    try {
        const { ingredient_name, ingredient_type } = req.body;

        const existingIngredientType = await IngredientType.findById(ingredient_type);
        if (!existingIngredientType) {
            return res.status(404).json({ message: 'Ingredient Type not found' });
        }

        const updatedIngredient = await Ingredient.findByIdAndUpdate(req.params.id, { ingredient_name, ingredient_type }, { new: true });
        if (!updatedIngredient) {
            return res.status(404).json({ message: 'Ingredient not found' });
        }
        res.status(200).json(updatedIngredient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an Ingredient by ID
export const deleteIngredient = async (req, res) => {
    try {
        const deletedIngredient = await Ingredient.findByIdAndDelete(req.params.id);
        if (!deletedIngredient) {
            return res.status(404).json({ message: 'Ingredient not found' });
        }
        res.status(200).json({ message: 'Ingredient deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
