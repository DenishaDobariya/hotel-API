import express from 'express';
import {
    createIngredientType,
    getAllIngredientTypes
} from '../controllers/ingredientTypeController.js';

const ingredientTypeRoutes = express.Router();

ingredientTypeRoutes.post('/', createIngredientType);
ingredientTypeRoutes.get('/', getAllIngredientTypes);

export default ingredientTypeRoutes; 
