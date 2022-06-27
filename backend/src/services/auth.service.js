const { User } = require("../models");

class AuthService {

    async register(studentId, password) {
        const foundUser = await User.findOne({ where: { studentId } });
        if (foundUser) {
            return false;
        }

        await User.create({ studentId, password });
        return true;
    }

}

const authService = new AuthService();

module.exports = authService;