import mongoose, { Mongoose } from "mongoose";



const OtpSchema = new mongoose.Schema(
    {
        parameter: {
            type: String,
            required: true,
        },
        otp: {
            type: String,

        },
        used: {
            type: Boolean,
            default: false

        },
        created: {
            type: Date,
            default: Date.now()
        },
        expired: {
            type: Date,
            default: Date.now() + 60 * 1000
        },

    }
);



OtpSchema.pre("save", function (next) {

    next();
});


const Otp = mongoose.model("Otp", OtpSchema);
export default Otp;
