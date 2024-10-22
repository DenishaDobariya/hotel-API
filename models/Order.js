import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    table: { type: mongoose.Schema.Types.ObjectId, ref: 'Table', required: true },
    staff: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff', required: true },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    order_date_time: { type: Date, default: Date.now },
    booking: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }
});

const Order = mongoose.model('Order', orderSchema);
export default Order;
    