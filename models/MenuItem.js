import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
    menu_item_description: { type: String, required: true },
    menu_item_price: { type: Number, required: true }
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);
export default MenuItem;
