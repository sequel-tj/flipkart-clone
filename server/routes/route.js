import express from 'express';

import { userLogin, userSignup } from '../controller/user-controller.js';
import { getProductById, getProducts } from '../controller/product-controller.js';
import { getOrderIds, getOrders } from '../controller/order-controller.js';

const app = express();
const router = express.Router();

router.post('/login', userLogin);
router.post('/signup', userSignup);

router.get('/products', getProducts);
router.get('/products/:id', getProductById);

router.get('/:username/orders', getOrderIds);
router.get('/:username/orders/:oid', getOrders);

export default router;