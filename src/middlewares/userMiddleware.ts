import { Request, Response, NextFunction } from 'express';
import validateUserObject from './userSchema';

export default class UserMiddleware {
  public inputsValidation = async (req: Request, res: Response, next: NextFunction) => {
    const result = await validateUserObject(req.body);
    if (result.error && result.error.message.includes('required')) {
      return res.status(400).send({ message: result.error.message });
    }
    if (result.error) return res.status(422).send({ message: result.error.message });
    next();
  };
}