import express from "express";
import { signup, login } from "../controller/userController.js"


import { validateSignup, validateSignupSocial } from "../middlewares/validateInput.js";
import { verifyOtp } from "../middlewares/verifyInput.js";

const router = express.Router();

router.post("/signup", validateSignup, verifyOtp, signup);
router.post("/login", login);
router.post("/social", validateSignupSocial, signup);

export default router;