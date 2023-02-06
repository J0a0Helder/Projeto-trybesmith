import { sign } from 'jsonwebtoken';
import auth from '../Auth/AuthService';
import UserModel from '../models/userModel';
import IUser from '../interfaces/userInterface';
import connection from '../models/connection';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: IUser): Promise<{ type?: string, message?: string, token?: string }> {
    const newUser = await this.model.create(user);
    if (newUser === 0) {
      return { type: 'ERROR', message: 'Erro ao cadastrar' };
    }
    const token = sign(
      {
        username: user.username,
      },
      auth.secret, // ref: https://dev.to/vitordelfino/autenticacao-com-jwt-22o7
      {
        expiresIn: auth.expires,
      },
    );
  
    return { token };
  }
}