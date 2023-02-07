import { sign } from 'jsonwebtoken';
import auth from '../Auth/AuthService';
import LoginModel from '../models/loginModel';
import connection from '../models/connection';
import ILogin from '../interfaces/loginInterface';

export default class LoginService {
  private model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async loginUser(login: ILogin): Promise<{
    type?: string, message?: string, token?: string
  }> {
    const validateLogin = await this.model.loginUser(login);
    if (validateLogin.length === 0) {
      return { type: 'INVALID_FIELDS', message: 'Username or password invalid' };
    }
    const token = sign(
      {
        username: login.username,
      },
      auth.secret, // ref: https://dev.to/vitordelfino/autenticacao-com-jwt-22o7
      {
        expiresIn: auth.expires,
      },
    );
    return { token };
  }
}