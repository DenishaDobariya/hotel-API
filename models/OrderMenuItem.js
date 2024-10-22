import mongoose from 'mongoose';

const orderMenuItemSchema = new mongoose.Schema({
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    menu_item: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
    order_menu_item_quantity: { type: Number, required: true },
    order_menu_item_comments: { type: String }
});

const OrderMenuItem = mongoose.model('OrderMenuItem', orderMenuItemSchema);
export default OrderMenuItem;
