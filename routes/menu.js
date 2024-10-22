import express from 'express';
import { createMenu, getAllMenus, getMenuById} from '../controllers/menuController.js';

const menuRoutes = express.Router();

menuRoutes.post('/', createMenu);
menuRoutes.get('/', getAllMenus);
menuRoutes.get('/:id', getMenuById);

export default menuRoutes;
