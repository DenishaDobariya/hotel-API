import mongoose from 'mongoose'; 

const ingredientSchema = new mongoose.Schema({
    ingredient_name: { type: String, required: true },
    ingredient_type: { type: mongoose.Schema.Types.ObjectId, ref: 'IngredientType', required: true } 
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

export default Ingredient; 
