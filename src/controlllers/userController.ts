import { Request, Response } from 'express';
import UserService from '../services/userService';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    const newUser = await this.userService.create(req.body);
    if (newUser.type) return res.status(500).json({ message: newUser.message });
    res.status(201).json(newUser);
  };
}