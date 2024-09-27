import { Router } from 'express';
import { reloadRequest } from './controllers.js';

const router = Router();

router.get('/', reloadRequest);

export default router;
