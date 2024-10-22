import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    date_of_booking: { type: Date, required: true },
    number_in_party: { type: Number, required: true },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true }
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
