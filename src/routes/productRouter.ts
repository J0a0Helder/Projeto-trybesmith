import { Router } from 'express';

const productRouter = Router();

productRouter.get('/', (req, res) => res.send('tudo ok aqui'));

export default productRouter;