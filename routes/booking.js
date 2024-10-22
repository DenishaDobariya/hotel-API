import express from 'express';
import {
    createBooking,
    getAllBookings,
    getBookingById
} from '../controllers/bookingController.js';

const bookingRoutes = express.Router();

bookingRoutes.post('/', createBooking); 
bookingRoutes.get('/', getAllBookings); 
bookingRoutes.get('/:id', getBookingById);  

export default bookingRoutes;
