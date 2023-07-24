import express from "express";
import { signup } from "../controller/userController.js"

import { validateSignup } from "../middlewares/validateInput.js";


const router = express.Router();

router.post("/signup", validateSignup, signup);


export default router;