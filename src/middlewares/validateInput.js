import { ClientErrors } from "../utils/error-codes.js";
export const validateSignup = (req, res, next) => {
    
  if (
    !req.body.email ||
    !req.body.password ||
    !req.body.name ||
    !req.body.dob
  ) {
    return res.status(ClientErrors.BAD_REQUEST).json({
      resp: false,
      message: "Missing mandatory parameter Signup",
    });
  }
  next();
};

export const validateSignupSocial = (req, res, next) => {
    
  if (
    !req.body.email ||
    !req.body.name ||
    !req.body.dob
  ) {
    return res.status(ClientErrors.BAD_REQUEST).json({
      resp: false,
      message: "Missing mandatory parameter Signup",
    });
  }
  next();
};


export const validateOtp = (req, res, next) => {
  if (
    !req.body.parameter
   
  ) {
    return res.status(ClientErrors.BAD_REQUEST).json({
      success: false,
      message: "Missing mandatory parameter OTP",
    });
  }

  next();
};
