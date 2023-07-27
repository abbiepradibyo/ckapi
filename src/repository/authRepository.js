
import Otp from "../models/otpModel.js";
import CrudRepository from "../repository/crudRepository.js";

class AuthRepository extends CrudRepository {
  constructor() {
    super(Otp);
  }

  async findBy(data) {
    try {
      const response = await Otp.findOne(data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  
}

export default UserRepository;