import { Router } from 'express';
import UserController from '../controlllers/userController';
import UserMiddleware from '../middlewares/userMiddleware';

const userController = new UserController();
const userMiddleware = new UserMiddleware();

const userRouter = Router();

userRouter.post('/', userMiddleware.inputsValidation, userController.create);

export default userRouter;