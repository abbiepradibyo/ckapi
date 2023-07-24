import User from "../models/userModel.js";
import CrudRepository from "../repository/crudRepository.js";

class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }

  async findBy(data) {
    try {
      const response = await User.findOne(data);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default UserRepository;
