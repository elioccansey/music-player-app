import { Router } from 'express';
import * as UserController from '../controller/UserController';  // Import userController using ES6 syntax

const router = Router();

router.post('/', UserController.login);
router.post('/logout', UserController.logout);

export default router;