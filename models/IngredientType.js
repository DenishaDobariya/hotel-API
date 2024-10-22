import mongoose from 'mongoose'; 

const ingredientTypeSchema = new mongoose.Schema({
    ingredient_type_code: { type: String, required: true, unique: true },
    ingredient_type_description: { type: String, required: true }
});

const IngredientType = mongoose.model('IngredientType', ingredientTypeSchema);
export default IngredientType; 
