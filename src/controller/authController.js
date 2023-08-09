
import AuthService from "../services/authServices.js";
import { SuccessCodes, ClientErrors, ServerErrors } from "../utils/error-codes.js";
import generateOtp from "../utils/generate-otp.js";
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
                message: "Failed send OTP before 60s",
            });

        }
        const resp_otp = await authServices.saveOtp({ parameter: req.body.parameter, otp: generateOtp(6), created: Date(), expired: addTime(Date(), 60) });
        return res.status(SuccessCodes.CREATED).json({
            resp: true,
            message: "Success Create OTP",
        });
    } catch (error) {
        return res.status(ServerErrors.NOT_IMPLEMENTED).json({
            resp: false,
            message: "Error send OTP",
            error: error,
        });
    }
};



