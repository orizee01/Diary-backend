import { Router } from 'express';
import UserController from './customer.controller';

const router = Router();

router.post('/Signup', UserController.CustomerController);

export default router;
