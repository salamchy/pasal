import express from "express";
import { userRegister } from "../controllers/Users.controller";

const router = express.Router();

router.post("/register", userRegister);

export default router;
