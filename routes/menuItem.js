import express from 'express';
import {
    createMenuItem,
    getAllMenuItems,
    getMenuItemById
} from '../controllers/menuItemController.js';

const menuItemRoutes = express.Router();

menuItemRoutes.post('/', createMenuItem);
menuItemRoutes.get('/', getAllMenuItems);
menuItemRoutes.get('/:id', getMenuItemById);

export default menuItemRoutes;
