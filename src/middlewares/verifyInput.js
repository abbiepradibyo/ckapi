
import { ClientErrors,ServerErrors } from "../utils/error-codes.js";
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
            return res.status(ClientErrors.NOT_FOUND).json({
                resp: false,
                data: {},
                message: "OTP not found!!",
                error: {},
            });
        }

        next();

    } catch (error) {
        return res.status(ServerErrors.NOT_IMPLEMENTED).json({
            resp: false,
            data: {},
            message: "Error try verify OTP",
            error: error,
        });
    }

};