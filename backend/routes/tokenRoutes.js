import express from 'express';
import { generateToken, useToken, getTokens } from '../controllers/tokenControllers.js';

const router = express.Router();

router.get('/tokens', getTokens);
router.get('/generarToken', generateToken)
router.post('/usarToken', useToken);

export default router;
