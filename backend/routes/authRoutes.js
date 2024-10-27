import { Router } from "express";
import { register, login, verifyToken } from '../controllers/authController.js';

const router = Router();

router.post('/registro',register);
router.post('/login', login);
router.get('/verify', verifyToken);

export default router;