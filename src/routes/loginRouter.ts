import { Router } from 'express';
import LoginController from '../controlllers/loginController';
import Loginvalidate from '../middlewares/loginMiddleware';

const loginController = new LoginController();
const loginvalidate = new Loginvalidate();

const loginRouter = Router();

loginRouter.post('/', loginvalidate.loginUserFields, loginController.loginUser);

export default loginRouter;