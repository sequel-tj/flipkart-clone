
import express from 'express';

import { userLogin, userSignup } from '../controller/user-controller.js';
import { getProducts } from '../controller/product-controller.js';

const app = express();
const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);

router.get('/products', getProducts);

export default router;