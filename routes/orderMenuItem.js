import express from 'express';
import {
    createOrderMenuItem,
    getAllOrderMenuItems,
    getOrderMenuItemById,
    updateOrderMenuItem
} from '../controllers/orderMenuItemController.js';

const orderMenuItemRoutes = express.Router();

orderMenuItemRoutes.post('/', createOrderMenuItem);
orderMenuItemRoutes.get('/', getAllOrderMenuItems); 
orderMenuItemRoutes.get('/:id', getOrderMenuItemById); 
orderMenuItemRoutes.put('/:id', updateOrderMenuItem); 

export default orderMenuItemRoutes;
