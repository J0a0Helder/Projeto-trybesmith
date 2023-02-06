import { Pool } from 'mysql2/promise';
import IOrder from '../interfaces/orderInterface';

export default class OrderModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrder[]> {
    const query = `
      SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.orders AS o
      INNER JOIN Trybesmith.products AS p ON p.order_id = o.id
      GROUP BY o.id
    `; // ref: https://www.bennadel.com/blog/4217-goodbye-group-concat-hello-json-arrayagg-and-json-objectagg-in-mysql-5-7-32.htm

    const [orders] = await this.connection.execute(query);
  
    return orders as IOrder[];
  }
}
