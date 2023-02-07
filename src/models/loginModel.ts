import { Pool } from 'mysql2/promise';
import ILogin from '../interfaces/loginInterface';
import IUser from '../interfaces/userInterface';

export default class LoginModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async loginUser(login: ILogin): Promise<IUser[]> {
    const { username, password } = login;
    const query = 'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ? LIMIT 1';
    const [rows] = await this.connection.execute(query, [username, password]);
    console.log(rows);
    return rows as IUser[];
  }
}