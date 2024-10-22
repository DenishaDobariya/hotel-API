import express from 'express';
import { createTable, getAllTables, getTableById} from '../controllers/tableController.js'
const tableRoutes = express.Router(); 

tableRoutes.post('/', createTable);
tableRoutes.get('/', getAllTables);
tableRoutes.get('/:id', getTableById);

export default tableRoutes;
