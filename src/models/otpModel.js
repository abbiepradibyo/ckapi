import mongoose, { Mongoose } from "mongoose";

const OtpSchema = new mongoose.Schema(
    {
        parameter: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },

    },
    { timestamps: true }
);

export default Otp;
