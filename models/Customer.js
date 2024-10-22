import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    customer_first_name: { type: String, required: true },
    customer_surname: { type: String, required: true },
    phone_number: { type: String },
    cellphone_number: { type: String },
    email_address: { type: String },
    other_customer_details: { type: String }
});

const  Customer = mongoose.model('Customer', customerSchema);
export default Customer;
