import UserRepository from "../repository/userRepository.js";
import generateToken from "../utils/generateToken.js"
import { SuccessCodes } from "../utils/error-codes.js";

const userRepository = new UserRepository();

export const signup = async (req, res) => {
  const registerData = {
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    dob: new Date(req.body.dob),
  };

  try {
    const response = await userRepository.create(registerData);
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


export const login = async (req, res) => {
 
  try {
    const response = await userRepository.findBy(req.body.email);
    if (!response) {
      throw {
        message: "no user found",
      };
    }

    if (!response.comparePassword(data.password)) {
      throw {
        success: false,
        message: "incorrect email or password",
      };
    }

    const token = generateToken(response.id);

    return res.status(SuccessCodes.CREATED).json({
      success: true,
      data: response,
      message: "Successfully logged in",
      error: {},
      token: token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      data: {},
      message: "Something went wrong",
      error: error,
      token: {}
    });
  }
};
