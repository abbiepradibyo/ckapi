
import { ClientErrors } from "../utils/error-codes.js";
import AuthService from "../services/authServices.js";

const authServices = new AuthService();



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
            throw {
                message: "Otp verified failed",
            }
        }

        next();

    } catch (error) {
        return res.status(501).json({
            resp: false,
            data: {},
            message: "Something went wrong",
            error: error,
        });
    }

};