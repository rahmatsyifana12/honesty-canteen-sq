const { Router } = require('express');
const { register, login, logout } = require('../controllers/auth.controller');
const { addBalance, withDraw, getBalance } = require('../controllers/canteenBalanceBox.controller');
const { getAllProduct, addProduct, buyProduct } = require('../controllers/product.controller');
const { authenticate } = require('../middlewares/auth.middleware');
const { validate } = require('../middlewares/validate.middleware');
const { newUserSchema } = require('../validations/auth.validate');
const { newProductSchema } = require('../validations/product.validate');

const router = Router();

// POST METHOD
router.post('/api/v1/auth/register', validate(newUserSchema), register);
router.post('/api/v1/auth/login', login);
router.post('/api/v1/products', authenticate, validate(newProductSchema), addProduct);
router.post('/api/v1/canteen-balance-box', authenticate, addBalance);

// GET METHOD
router.get('/api/v1/products', getAllProduct);
router.get('/api/v1/canteen-balance-box', authenticate, getBalance);

// DELETE METHOD
router.delete('/api/v1/auth/logout', authenticate, logout);
router.delete('/api/v1/canteen-balance-box', authenticate, withDraw);
router.delete('/api/v1/products/buy', authenticate, buyProduct);

module.exports = router;