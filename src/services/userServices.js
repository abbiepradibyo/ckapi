import UserRepository from "../repository/userRepository.js";

class UserService {

    constructor() {
        this.userRepository = new UserRepository();
    }

    async saveUser(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            throw error;

        }
    }

    async findUser(data) {
        try {
            const user = await this.userRepository.findBy(data);
            return user
        } catch (error) {
            throw error;

        }
    }
}

export default UserService;