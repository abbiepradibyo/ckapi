import UserService from "../services/userService.js";
import generateToken from "../utils/generateToken.js"
import { SuccessCodes } from "../utils/error-codes.js";

const userService = new UserService();

export const signup = async (req, res) => {
  const registerData = {
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    dob: new Date(req.body.dob),
  };

  try {
    const response = await userService.signup(registerData);
   
    const token = generateToken(response.id);

    return res.status(SuccessCodes.CREATED).json({
      resp: true,
      data: response,
      message: "Sign up successfull",
      error: {},
      token: token,
    });
  } catch (error) {
    console.log(error);
    return res.status(501).json({
      resp: false,
      data: {},
      message: "Something went wrong",
      error: error,
      token: {},
    });
  }
};
