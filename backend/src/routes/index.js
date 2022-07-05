const { Router } = require('express');
const { register, login, logout } = require('../controllers/auth.controller');
const { addBalance, withdraw, getBalance } = require('../controllers/canteenBalanceBox.controller');
const { addSellerInbox, getAllInboxes, deleteInbox, addBuyerInbox } = require('../controllers/inbox.controller');
const { getAllProducts, addProduct, buyProduct } = require('../controllers/product.controller');
const { authenticate } = require('../middlewares/auth.middleware');
const { validate } = require('../middlewares/validate.middleware');
const { newUserSchema } = require('../validations/auth.validate');
const { newProductSchema } = require('../validations/product.validate');

const router = Router();

// POST METHOD
router.post('/api/v1/auth/register', validate(newUserSchema), register);
router.post('/api/v1/auth/login', login);
router.post('/api/v1/products', authenticate, validate(newProductSchema), addProduct);
router.post('/api/v1/inboxes/seller/:productId', authenticate, addSellerInbox);
router.post('/api/v1/inboxes/buyer/:productId', authenticate, addBuyerInbox);

// GET METHOD
router.get('/api/v1/products', getAllProducts);
router.get('/api/v1/canteen-balance-box', authenticate, getBalance);
router.get('/api/v1/inboxes', authenticate, getAllInboxes);

// PUT METHOD
router.put('/api/v1/canteen-balance-box/add', authenticate, addBalance);
router.put('/api/v1/canteen-balance-box/withdraw', authenticate, withdraw);

// DELETE METHOD
router.delete('/api/v1/auth/logout', authenticate, logout);
router.delete('/api/v1/products/buy/:productId', authenticate, buyProduct);
router.delete('/api/v1/inboxes/:inboxId', authenticate, deleteInbox);

module.exports = router;