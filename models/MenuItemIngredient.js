import mongoose from 'mongoose';

const menuItemIngredientSchema = new mongoose.Schema({
    menu_item: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
    ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient', required: true },
    item_quantity: { type: Number, required: true }
});

const MenuItemIngredient= mongoose.model('MenuItemIngredient', menuItemIngredientSchema);
export default MenuItemIngredient;
