import { Router } from 'express';
import UserController from '../controlllers/userController';

const userController = new UserController();
const userRouter = Router();

userRouter.get('/', userController.getAll);

export default userRouter;