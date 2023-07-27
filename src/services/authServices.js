import AuthRepository from "../repository/userRepository.js";

class AuthService {

    constructor() {
        this.authRepository = new AuthRepository();
    }


    async findOtp(data) {
        try {
            const otp = await this.authRepository.findBy(data);
            return otp
        } catch (error) {
            throw error;

        }
    }

    async saveOtp(data) {
        try {
            const user = await this.authRepository.create(data);
            return user;
        } catch (error) {
            throw error;

        }
    }
}

export default AuthService;