import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/productInterface';

export default class ProductModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(name: string, amount:string): Promise<IProduct> {
    const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
    const [dataInserted] = await this.connection.execute<ResultSetHeader>(
      query,
      [name, amount],
    );
    const { insertId } = dataInserted;
    return { id: insertId, name, amount };
  }

  public async getAll(): Promise<IProduct[]> {
    const [rows] = await this.connection.execute('SELECT * FROM Trybesmith.products');
    return rows as IProduct[];
  }
}