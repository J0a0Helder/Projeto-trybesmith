import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/userInterface';

export default class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: IUser): Promise<number> {
    const { username, vocation, level, password } = user;
    const query = `INSERT INTO Trybesmith.users (username, vocation, level, password) 
    VALUES (?, ?, ?, ?)`;
    const [dataInserted] = await this.connection.execute<ResultSetHeader>(
      query,
      [username, vocation, level, password],
    );
    const { affectedRows } = dataInserted;
    return affectedRows;
  }
}