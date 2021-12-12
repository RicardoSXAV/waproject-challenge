import { ApiProperty } from '@nestjs/swagger';
import { Model } from 'objection';

import { Product } from './product';
import { User } from './user';

import { IOrder } from '../interfaces/order';

export class Order extends Model implements IOrder {
  @ApiProperty({ type: 'string' })
  public id: string;
  @ApiProperty({ type: 'integer' })
  public userId?: number;
  @ApiProperty({ type: 'string', format: 'date-time' })
  public createdDate: Date;
  @ApiProperty({ type: 'string', format: 'date-time' })
  public updatedDate: Date;

  public user: User;
  public product: Product;

  public static get tableName(): string {
    return 'Order';
  }

  public static get relationMappings(): any {
    return {
      user: {
        relation: Model.HasOneRelation,
        modelClass: User,
        filter: (query: any) => query.select('id', 'firstName', 'lastName', 'email'),
        join: {
          from: 'User.id',
          to: 'Order.userId'
        }
      },
      product: {
        relation: Model.HasOneRelation,
        modelClass: Product,
        filter: (query: any) => query.select('id', 'name', 'price', 'description'),
        join: {
          from: 'Product.id',
          to: 'Order.productId'
        }
      }
    };
  }

  public $beforeInsert(): void {
    this.createdDate = this.updatedDate = new Date();
  }

  public $beforeUpdate(): void {
    this.updatedDate = new Date();
  }
}
