
import UserService from "../services/userServices.js";
import generateToken from "../utils/generateToken.js"
import { SuccessCodes } from "../utils/error-codes.js";

const userServices = new UserService();

export const signup = async (req, res) => {
  const registerData = {
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    dob: new Date(req.body.dob),
  };
  try {
    const response = await userServices.signup(registerData);
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
      token: "",
    });
  }
};

export const login = async (req, res) => {
  const loginData = {
    email: req.body.email
  };
  try {
    const response = await userServices.login(loginData);
    if (!response) {
      throw {
        message: "Incorrect User",
      }
    }
    if (!response.comparePassword(req.body.password)) {
      throw {
        message: "Incorrect Password",
      }
    }
    const token = generateToken(response.id);
    return res.status(SuccessCodes.CREATED).json({
      resp: true,
      data: response,
      message: "Sign up successfull",
      error: {},
      token: token,
    });
  } catch (error) {
    return res.status(501).json({
      resp: false,
      data: {},
      message: "Something went wrong",
      error: error,
      token: "",
    });
  }
};
