import { IUser } from './user';
import { IProduct } from './product';

export interface IOrder {
  id?: string;
  userId?: number;
  productId?: number;

  user?: IUser;
  product?: IProduct;

  createdDate?: Date;
  updatedDate?: Date;
}
