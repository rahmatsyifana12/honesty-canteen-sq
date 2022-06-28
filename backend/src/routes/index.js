const { Router } = require('express');
const { register, login, logout } = require('../controllers/auth.controller');
const { getAll } = require('../controllers/product.controller');
const { authenticate } = require('../middlewares/auth.middleware');
const { validate } = require('../middlewares/validate.middleware');
const { newUserSchema } = require('../validations/auth.validate');

const router = Router();

// POST METHOD
router.post('/api/v1/auth/register', validate(newUserSchema), register);
router.post('/api/v1/auth/login', login);

// GET METHOD
router.get('/api/v1/products', getAll);

// DELETE METHOD
router.delete('/api/v1/auth/logout', authenticate, logout);

module.exports = router;