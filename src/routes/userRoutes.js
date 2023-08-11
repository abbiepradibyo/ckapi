import express from "express";
import { signup, login } from "../controller/userController.js"


import { validateSignup, validateSignupSocial } from "../middlewares/validateInput.js";
import { verifyOtp, verifyUserNotExist } from "../middlewares/verifyInput.js";

const router = express.Router();

router.post("/signup", validateSignup, verifyUserNotExist, verifyOtp, signup);
router.post("/login", login);
router.post("/signup_social", validateSignupSocial,verifyUserNotExist, signup);
router.post("/login_social", login);

export default router;