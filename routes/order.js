import express from 'express';
import {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder
} from '../controllers/orderController.js';

const orderRoutes = express.Router();

orderRoutes.post('/', createOrder); 
orderRoutes.get('/', getAllOrders); 
orderRoutes.get('/:id', getOrderById); 
orderRoutes.put('/:id', updateOrder); 

export default orderRoutes;
