import { Router } from 'express';
import ProductController from '../controlllers/productController';
import ProductsMiddleware from '../middlewares/productsMiddleware';

const productRouter = Router();

const productController = new ProductController();
const productsMiddleware = new ProductsMiddleware();

productRouter.post('/', productsMiddleware.inputsValidation, productController.create);
productRouter.get('/', productController.getAll);

export default productRouter;