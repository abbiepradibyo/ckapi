
import AuthService from "../services/authServices.js";
import { SuccessCodes } from "../utils/error-codes.js";
import otpGenerator from "otp-generator";

const authServices = new AuthService();



export const sendotp = async (req, res) => {

    try {
        const response = await authServices.findOtp({
            parameter: req.body.parameter,
            expired: {
                $gt: new Date(startDate).toISOString(),
                $lt: new Date(endDate).toISOString()
            }
        });
        if (response) {
            throw {
                message: "Error",
            }
        }

        var otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        });



        const resp_otp = await authServices.saveOtp({ parameter: req.body.parameter, otp: otp });

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



