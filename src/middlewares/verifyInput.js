
import { ClientErrors,ServerErrors } from "../utils/error-codes.js";
import AuthService from "../services/authServices.js";
import UserService from "../services/userServices.js";
const authServices = new AuthService();
const userServices = new UserService();


export const verifyOtp = async (req, res, next) => {

    try {

        
        const response = await authServices.findOtp({
            parameter: req.body.email,
            expired: {
                $gte: new Date()
            },
            used: false,
            otp: req.body.otp,


        });
     
        if (!response) {
            return res.status(ClientErrors.NOT_FOUND).json({
                resp: false,
                message: "Incorrect OTP",
            });
        }

        next();

    } catch (error) {
        return res.status(ServerErrors.NOT_IMPLEMENTED).json({
            resp: false,
            data: {},
            message: "Error verify OTP",
            error: error,
        });
    }

};


export const verifyUserNotExist = async (req, res, next) => {


    try {

        
        const response = await userServices.findUser({
            email: req.body.email,
           


        });
     
        if (response) {
            return res.status(ClientErrors.NOT_FOUND).json({
                resp: false,
                message: "User Exits",
            });
        }

        next();

    } catch (error) {
        return res.status(ServerErrors.NOT_IMPLEMENTED).json({
            resp: false,
            data: {},
            message: "Error verify User No Exist",
            error: error,
        });
    }

};