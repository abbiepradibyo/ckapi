import express from "express";
import { sendotp } from "../controller/authController.js"


import { validateOtp } from "../middlewares/validateInput.js";


const router = express.Router();

router.post("/sendotp", validateOtp, sendotp);


export default router;