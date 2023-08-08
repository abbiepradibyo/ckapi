
import AuthService from "../services/authServices.js";
import { SuccessCodes, ClientErrors, ServerErrors } from "../utils/error-codes.js";
import otpGenerator from "otp-generator";
import { addTime } from "../utils/date-format.js";

const authServices = new AuthService();



export const sendotp = async (req, res) => {

    try {
        const response = await authServices.findOtp({
            parameter: req.body.parameter,
            expired: {
                $gte: new Date()
            },
            used: false,


        });



        if (response) {
            return res.status(ClientErrors.REPEAT_REQUEST).json({
                resp: true,
                data: {},
                message: "Failed send OTP",
                error: "Repeat send OTP before 60s",
            });

        }

        var otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        });



        const resp_otp = await authServices.saveOtp({ parameter: req.body.parameter, otp: otp, created: Date(), expired: addTime(Date(), 60) });

        return res.status(SuccessCodes.CREATED).json({
            resp: true,
            data: {},
            message: "Success Create OTP",
            error: {},
        });



    } catch (error) {
        return res.status(ServerErrors.NOT_IMPLEMENTED).json({
            resp: false,
            data: {},
            message: "Error send OTP",
            error: error,
        });
    }
};



