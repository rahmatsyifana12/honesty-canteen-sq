const { Router } = require('express');
const { register, login, logout } = require('../controllers/auth.controller');
const { authenticate } = require('../middlewares/auth.middleware');
const { validate } = require('../middlewares/validate.middleware');
const { newUserSchema } = require('../validations/auth.validate');

const router = Router();

router.post('/api/v1/auth/register', validate(newUserSchema), register);
router.post('/api/v1/auth/login', login);

router.get('/api/v1/products', authenticate, );

router.delete('/api/v1/auth/logout', authenticate, logout);

module.exports = router;