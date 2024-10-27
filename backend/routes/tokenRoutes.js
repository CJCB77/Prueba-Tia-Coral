import express from 'express';
import { generateToken, useToken } from '../controllers/tokenControllers.js';

const router = express.Router();

router.get('/generarToken', generateToken)
router.post('/usarToken', useToken);

export default router;
