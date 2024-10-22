import Booking from '../models/Booking.js';

// Create Booking
export const createBooking = async (req, res) => {
    try {
        const { date_of_booking, number_in_party, customer } = req.body;
        const newBooking = new Booking({ date_of_booking, number_in_party, customer });
        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all Bookings
export const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate('customer');
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Booking by ID
export const getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id).populate('customer');
        if (!booking) return res.status(404).json({ message: 'Booking not found' });
        res.status(200).json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


