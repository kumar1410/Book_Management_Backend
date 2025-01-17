import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.post("/users/register", registerUser);
userRoutes.post("/users/login", loginUser);

export default userRoutes;
