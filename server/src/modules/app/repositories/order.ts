import { Injectable } from '@nestjs/common';
import { IOrder } from 'modules/database/interfaces/order';
import { Order } from 'modules/database/models/Order';
import { Transaction } from 'objection';

@Injectable()
export class OrderRepository {
  public async findById(id: string, transaction: Transaction = null): Promise<Order> {
    return Order.query(transaction).findById(id);
  }

  public async insert(model: IOrder, transaction: Transaction = null): Promise<Order> {
    return Order.query(transaction).insertAndFetch(model as any);
  }

  public async update(model: IOrder, transaction: Transaction = null): Promise<Order> {
    return Order.query(transaction).patchAndFetchById(model.id, model as any);
  }

  public async remove(deviceId: string, transaction: Transaction = null): Promise<void> {
    await Order.query(transaction).deleteById(deviceId);
  }
}
