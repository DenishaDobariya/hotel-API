import express from "express";
import {
    getCustomers,
    addCustomer,
    getSingleCustomer,
    updateCustomer
} from "../controllers/customerController.js"; 

const customerRoutes = express.Router();

customerRoutes.get("/", getCustomers);
customerRoutes.post("/", addCustomer);
customerRoutes.get("/:id", getSingleCustomer);
customerRoutes.put("/:id", updateCustomer);

export default customerRoutes;
