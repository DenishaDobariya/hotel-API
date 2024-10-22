import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
    menu_date: { type: Date, required: true }
});

const Menu = mongoose.model('Menu', menuSchema);
export default Menu;
