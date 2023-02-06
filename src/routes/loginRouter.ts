import { Router } from 'express';

const loginRouter = Router();

loginRouter.get('/', (req, res) => res.send('tudo ok aqui'));

export default loginRouter;