import Staff from '../models/Staff.js';

// Create Staff
export const createStaff = async (req, res) => {
    try {
        const { staff_first_name, staff_last_name, staff_role } = req.body;
        const newStaff = new Staff({ staff_first_name, staff_last_name, staff_role });
        await newStaff.save();
        res.status(201).json(newStaff);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all Staff members
export const getAllStaff = async (req, res) => {
    try {
        const staffMembers = await Staff.find().populate('staff_role');
        res.status(200).json(staffMembers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Staff by ID
export const getStaffById = async (req, res) => {
    try {
        const staff = await Staff.findById(req.params.id).populate('staff_role');
        if (!staff) return res.status(404).json({ message: 'Staff not found' });
        res.status(200).json(staff);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Staff by ID
export const updateStaff = async (req, res) => {
    try {
        const { staff_first_name, staff_last_name, staff_role } = req.body;
        const updatedStaff = await Staff.findByIdAndUpdate(
            req.params.id,
            { staff_first_name, staff_last_name, staff_role },
            { new: true }
        );
        if (!updatedStaff) return res.status(404).json({ message: 'Staff not found' });
        res.status(200).json(updatedStaff);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete Staff
export const deleteStaff = async (req, res) => {
    try {
        const deletedStaff = await Staff.findByIdAndDelete(req.params.id);
        if (!deletedStaff) return res.status(404).json({ message: 'Staff not found' });
        res.status(200).json({ message: 'Staff deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
