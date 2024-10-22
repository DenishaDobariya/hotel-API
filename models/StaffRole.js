import mongoose from 'mongoose';

const staffRoleSchema = new mongoose.Schema({
    staff_role_code: { type: String, required: true, unique: true },
    staff_role_description: { type: String, required: true }
});

const staffRole = mongoose.model('StaffRole', staffRoleSchema);
export default staffRole; 
