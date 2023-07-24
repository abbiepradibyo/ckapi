import express from "express";
import { signup, login } from "../controller/userController.js"


import { validateSignup } from "../middlewares/validateInput.js";


const router = express.Router();

router.post("/signup", validateSignup, signup);
router.post("/login", login);

export default router;