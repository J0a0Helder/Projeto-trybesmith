import { Request, Response, NextFunction } from 'express';
import validateObject from './productSchema';

export default class ProductsMiddleware {
  public inputsValidation = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const { name, amount } = body;
    if (!name) return res.status(400).json({ message: '"name" is required' });
    if (!amount) return res.status(400).json({ message: '"amount" is required' });
    const result = await validateObject(body);
    if (result.error) {
      return res.status(422).send({ message: result.error.message });
    }
    next();
  };
}