/* eslint-disable no-unused-vars */
import express from 'express';
import CustomerRouter from './customers/customer.router';

const router = express.Router();

router.use('/customers', CustomerRouter);
export default router;
