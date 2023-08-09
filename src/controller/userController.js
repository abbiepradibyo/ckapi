
import UserService from "../services/userServices.js";
import generateToken from "../utils/generate-token.js"
import { SuccessCodes, ClientErrors, ServerErrors } from "../utils/error-codes.js";

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


    return res.status(SuccessCodes.CREATED).json({
      resp: true,
      data: response,
      message: "Success signup account",
      token: generateToken(response.id),
    });
  } catch (error) {
    return res.status(ServerErrors.NOT_IMPLEMENTED).json({
      resp: false,
      message: "Error signup account",
      error: error,
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
      return res.status(ClientErrors.NOT_FOUND).json({
        resp: false,
        message: "Incorrect User",
      });
    }
    if (!response.comparePassword(req.body.password)) {
      return res.status(ClientErrors.NOT_FOUND).json({
        resp: false,
        message: "Incorrect Password",
      });
    }
    return res.status(SuccessCodes.CREATED).json({
      resp: true,
      data: response,
      message: "Sign up successfull",
      token: generateToken(response.id),
    });
  } catch (error) {
    return res.status(ServerErrors.NOT_IMPLEMENTED).json({
      resp: false,
      message: "Error singin account",
      error: error,
    });
  }
};
