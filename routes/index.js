import express from 'express';
import ingredientTypeRoutes from './ingredientType.js';
import ingredientRoutes from './ingredient.js';
import menuItemIngredientRoutes from './menuItemIngredient.js';
import menuItemRoutes from './menuItem.js';
import menuRoutes from './menu.js';
import orderMenuItemRoutes from './orderMenuItem.js';
import orderRoutes from './order.js';
import staffRoleRoutes from './staffRole.js';
import staffRoutes from './staff.js';
import tableRoutes from './table.js';
import bookingRoutes from './booking.js';
import customerRoutes from './customer.js';

const routes = express.Router();

routes.use('/ingredientType', ingredientTypeRoutes)
routes.use('/ingredient', ingredientRoutes)
routes.use('/menuItemIngredient', menuItemIngredientRoutes); 
routes.use('/menuItem',menuItemRoutes)
routes.use('/menu',menuRoutes)
routes.use('/orderMenuItem',orderMenuItemRoutes)
routes.use('/order',orderRoutes);
routes.use('/staffRole' ,staffRoleRoutes);
routes.use('/staff',staffRoutes)
routes.use('/table',tableRoutes);
routes.use('/booking',bookingRoutes)
routes.use('/customer', customerRoutes);

export default routes;
