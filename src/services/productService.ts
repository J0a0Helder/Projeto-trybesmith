import ProductModel from '../models/productModel';
import IProduct from '../interfaces/productInterface';
import connection from '../models/connection';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async create(name: string, amount: string): Promise<IProduct> {
    const newProduct = await this.model.create(name, amount);
    return newProduct;
  }
}