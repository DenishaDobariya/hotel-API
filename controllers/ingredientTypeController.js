import IngredientType from '../models/IngredientType.js'; 

// Create a new Ingredient Type
export const createIngredientType = async (req, res) => {
    try {
        const { ingredient_type_code, ingredient_type_description } = req.body;
        const newIngredientType = new IngredientType({ ingredient_type_code, ingredient_type_description });
        await newIngredientType.save();
        res.status(201).json(newIngredientType);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all Ingredient Types
export const getAllIngredientTypes = async (req, res) => {
    try {
        const ingredientTypes = await IngredientType.find();
        res.status(200).json(ingredientTypes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




