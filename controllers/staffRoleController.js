import StaffRole from "../models/StaffRole.js"; 

// Get all staff roles
export const getStaffRoles = async (req, res) => {
    try {
        const staffRoles = await StaffRole.find();
        res.status(200).json(staffRoles);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch staff roles" });
    }
};

// Add a new staff role
export const addStaffRole = async (req, res) => {
    const { staff_role_code, staff_role_description } = req.body;
    try {
        const staffRole = new StaffRole({ staff_role_code, staff_role_description });
        await staffRole.save();
        res.status(201).json(staffRole);
    } catch (error) {
        res.status(500).json({ error: "Failed to add staff role" });
    }
};

// Get a single staff role by ID
export const getSingleStaffRole = async (req, res) => {
    const { id } = req.params;
    try {
        const staffRole = await StaffRole.findById(id);
        if (!staffRole) {
            return res.status(404).json({ error: "Staff role not found" });
        }
        res.status(200).json(staffRole);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch staff role" });
    }
};

// Update a staff role by ID
export const updateStaffRole = async (req, res) => {
    const { id } = req.params;
    const { staff_role_code, staff_role_description } = req.body;
    try {
        const updatedStaffRole = await StaffRole.findByIdAndUpdate(
            id,
            { staff_role_code, staff_role_description },
            { new: true }
        );
        if (!updatedStaffRole) {
            return res.status(404).json({ error: "Staff role not found" });
        }
        res.status(200).json(updatedStaffRole);
    } catch (error) {
        res.status(500).json({ error: "Failed to update staff role" });
    }
};

// Delete a staff role by ID
export const deleteStaffRole = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedStaffRole = await StaffRole.findByIdAndDelete(id);
        if (!deletedStaffRole) {
            return res.status(404).json({ error: "Staff role not found" });
        }
        res.status(200).json({ message: "Staff role deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete staff role" });
    }
};
