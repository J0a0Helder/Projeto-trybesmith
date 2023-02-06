import { Pool } from 'mysql2/promise';
import IUser from '../interfaces/userInterface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IUser[]> {
    const [rows] = await this.connection.execute('SELECT * FROM Trybesmith.users');
    return rows as IUser[];
  }
}