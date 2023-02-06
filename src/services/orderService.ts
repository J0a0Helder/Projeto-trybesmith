import connection from '../models/connection';
import OrderModel from '../models/orderModel';
import IOrder from '../interfaces/orderInterface';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<Array<IOrder>> {
    const allOrders = this.model.getAll();
    return allOrders;
  }
}