import Table from '../models/Table.js'

// Create a new table
export const createTable = async (req, res) => {
    try {
        const { table_number, table_details } = req.body;
        const newTable = new Table({ table_number, table_details });
        await newTable.save();
        res.status(201).json(newTable);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all tables
export const getAllTables = async (req, res) => {
    try {
        const tables = await Table.find();
        res.status(200).json(tables);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a table by ID
export const getTableById = async (req, res) => {
    try {
        const table = await Table.findById(req.params.id);
        if (!table) {
            return res.status(404).json({ message: "Table not found" });
        }
        res.status(200).json(table);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


