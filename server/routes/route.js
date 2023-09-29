import express from 'express';
import { userLogin, userSignup } from '../controller/user-controller.js';


const app = express();
const router = express.Router();

app.use(express.json());

router.post('/signup', userSignup)
router.post('/login', userLogin);

export default router;