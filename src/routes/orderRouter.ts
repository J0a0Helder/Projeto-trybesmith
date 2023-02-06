import { Router } from 'express';
import OrderController from '../controlllers/orderController';

const orderRouter = Router();

const orderController = new OrderController();

orderRouter.get('/', orderController.getAll);

export default orderRouter;