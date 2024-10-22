import express from 'express';
import {
    createMenuItemIngredient,
    getAllMenuItemIngredients,
    getMenuItemIngredientById,
    updateMenuItemIngredient,
    deleteMenuItemIngredient
} from '../controllers/menuItemIngredientController.js';

const menuItemIngredientRoutes = express.Router();

menuItemIngredientRoutes.post('/', createMenuItemIngredient); 
menuItemIngredientRoutes.get('/', getAllMenuItemIngredients); 
menuItemIngredientRoutes.get('/:id', getMenuItemIngredientById); 
menuItemIngredientRoutes.put('/:id', updateMenuItemIngredient); 
menuItemIngredientRoutes.delete('/:id', deleteMenuItemIngredient); 

export default menuItemIngredientRoutes;
