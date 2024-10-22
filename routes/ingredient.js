import express from 'express';
import {
    createIngredient,
    getAllIngredients,
    getIngredientById,
    updateIngredient,
    deleteIngredient
} from '../controllers/ingredientController.js'; 

const ingredientRoutes = express.Router(); 

ingredientRoutes.post('/', createIngredient);
ingredientRoutes.get('/', getAllIngredients);
ingredientRoutes.get('/:id', getIngredientById);
ingredientRoutes.put('/:id', updateIngredient);
ingredientRoutes.delete('/:id', deleteIngredient);

export default ingredientRoutes; 
