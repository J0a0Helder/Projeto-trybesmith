import { Router } from 'express';

const orderRouter = Router();

orderRouter.get('/', (req, res) => res.send('tudo ok aqui'));

export default orderRouter;