const authService = require("../services/auth.service");

async function register(req, res) {
    const { studentId, password } = req.body;

    try {
        await authService.register(studentId, password);
    } catch (error) {
        return res.status(error.statusCode).json({
            status: 'fail',
            message: error.message
        });
    }

    return res.status(201).json({
        status: 'success',
        message: 'Successfully registered an account'
    });
}

async function login(req, res) {
    const { studentId, password } = req.body;
    let accessToken;
    try {
        accessToken = await authService.login(studentId, password);
    } catch (error) {
        return res.status(error.statusCode).json({
            status: 'fail',
            message: error.message
        });
    }

    return res.status(200).json({
        status: 'success',
        message: 'Successfully logged in',
        data: { accessToken }
    });
}

async function logout(req, res) {
    const accessToken = req.headers['authorization'].split(' ')[1];
    const studentId = jwt.decode(accessToken).studentId;

    try {
        
    } catch (error) {
        return res.status(error.statusCode).json({
            status: 'fail',
            message: error.message
        });
    }

    return res.status(200).json({
        status: 'success',
        message: 'Successfully logged out'
    });
}

module.exports = {
    register,
    login
};