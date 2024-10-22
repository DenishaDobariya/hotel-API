import mongoose from 'mongoose';

const tableSchema = new mongoose.Schema({
    table_number: { type: Number, required: true, unique: true },
    table_details: { type: String, required: true }
});

const Table = mongoose.model('Table', tableSchema);
export default Table;
