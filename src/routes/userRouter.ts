import { Router } from 'express';
import UserController from '../controlllers/userController';

const userController = new UserController();
const userRouter = Router();

userRouter.post('/', userController.create);

export default userRouter;