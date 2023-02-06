import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', (req, res) => res.send('tudo ok aqui'));

export default userRouter;