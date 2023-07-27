
import AuthService from "../services/authServices.js";
import { SuccessCodes } from "../utils/error-codes.js";

const authServices = new AuthService();



export const sendotp = async (req, res) => {
    const otpData = {
        parameter: req.body.parameter
    };
    try {
        const response = await authServices.findOtp(otpData);
        if (response) {
            throw {
                message: "Error",
            }
        }


        const otp = await authServices.saveOtp(otpData);

        return res.status(SuccessCodes.CREATED).json({
            resp: true,
            data: "sukses insert",
            message: "Sign up successfull",
            error: {},
        });



    } catch (error) {
        return res.status(501).json({
            resp: false,
            data: {},
            message: "Something went wrong",
            error: error,
        });
    }
};



