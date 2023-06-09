import { Request, Response, NextFunction } from 'express';
import validateObject from './productSchema';

export default class ProductsMiddleware {
  public inputsValidation = async (req: Request, res: Response, next: NextFunction) => {
    const result = await validateObject(req.body);
    if (result.error && result.error.message.includes('required')) {
      return res.status(400).send({ message: result.error.message });
    }
    if (result.error) return res.status(422).send({ message: result.error.message });
    next();
  };
}