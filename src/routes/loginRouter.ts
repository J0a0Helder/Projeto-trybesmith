import { Router } from 'express';
import LoginController from '../controlllers/loginController';
import LoginMiddelware from '../middlewares/loginMiddleware';

const loginController = new LoginController();
const loginMiddleware = new LoginMiddelware();

const loginRouter = Router();

loginRouter.post('/', loginMiddleware.loginUserFields, loginController.loginUser);

export default loginRouter;