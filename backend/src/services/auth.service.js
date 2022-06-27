const { User } = require("../models");
const ResponseError = require("../utils/error");

class AuthService {

    async register(studentId, password) {
        const foundUser = await User.findOne({ where: { studentId } });
        if (foundUser) {
            throw new ResponseError('User already exists', 400);
        }

        await User.create({ studentId, password });
        return true;
    }

}

module.exports = new AuthService();