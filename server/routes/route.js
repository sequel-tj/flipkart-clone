import express from 'express';

import { userLogin, userSignup } from '../controller/user-controller.js';
import { getProductById, getProducts } from '../controller/product-controller.js';

const app = express();
const router = express.Router();

router.post('/login', userLogin);
router.post('/signup', userSignup);

router.get('/products', getProducts);
router.get('/products/:id', getProductById);

export default router;