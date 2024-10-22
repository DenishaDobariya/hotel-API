import express from "express";
import { getStaffRoles, addStaffRole, getSingleStaffRole, updateStaffRole, deleteStaffRole } from "../controllers/StaffRoleController.js";
const staffRoleRoutes = express.Router();

staffRoleRoutes.get("/", getStaffRoles);
staffRoleRoutes.post("/", addStaffRole);
staffRoleRoutes.get("/:id", getSingleStaffRole);
staffRoleRoutes.put("/:id", updateStaffRole);
staffRoleRoutes.delete("/:id", deleteStaffRole);

export default staffRoleRoutes;
