import { ClientErrors } from "../utils/error-codes.js";

export const verifyOtp = async (req, res, next) => {

    try {
        const response = await authServices.findOtp({
            parameter: req.body.parameter,
            expired: {
                $gte: new Date()
            },
            used: false,
            otp: req.body.otp,


        });
        if (response) {
            throw {
                message: "Otp verified failed",
            }
        }

        return res.status(SuccessCodes.OK).json({
            resp: true,
            data: {},
            message: "Otp verified up successfull",
            error: {},
        });

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