const bcrypt = require('bcrypt');
const { User } = require("../models");
const ResponseError = require("../utils/error");

class AuthService {

    async register(studentId, password) {
        const foundUser = await User.findOne({ where: { studentId } });

        if (foundUser) {
            throw new ResponseError('User already exists', 400);
        }

        if (studentId.length !== 5) {
            throw new ResponseError('Student ID is invalid', 400);
        }

        const strNum1 = studentId.substring(0, 3);
        const strnum2 = studentId.substring(3, 5);

        let sum = 0;
        for (let i=0; i<strNum1.length; i++) {
            sum += parseInt(strNum1[i]);
        }

        if (sum != parseInt(strnum2)) {
            throw new ResponseError('Student ID is invalid', 400);
        }

        const hashedPassword = bcrypt.hashSync(
            password,
            10
        );

        await User.create({ studentId, password: hashedPassword });
    }

}

module.exports = new AuthService();