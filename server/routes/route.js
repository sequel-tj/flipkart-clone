import express from 'express';

import { findUser, userLogin, userSignup } from '../controller/user-controller.js';
import { getProductById, getProducts } from '../controller/product-controller.js';
import { getOrderIds, getOrders, placeOrder } from '../controller/order-controller.js';
import { checkout, paymentVerification } from '../controller/payment-controller.js';

const app = express();
const router = express.Router();

router.post('/login', userLogin);
router.post('/signup', userSignup);
router.get('/getUserDetails/:username', findUser);

router.get('/products', getProducts);
router.get('/products/:id', getProductById);

router.post('/placeOrder', placeOrder);

router.get('/:username/orders', getOrderIds);
router.get('/:username/orders/:oid', getOrders);

router.post('/checkout', checkout);
router.post('/paymentverification', paymentVerification);

export default router;