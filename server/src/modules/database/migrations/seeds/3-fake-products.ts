import * as faker from 'faker/locale/pt_BR';
import * as Knex from 'knex';
import { IProduct } from 'modules/database/interfaces/product';
import { IS_DEV } from 'settings';

export async function seed(knex: Knex): Promise<void> {
  if (!IS_DEV) return;

  for (let x = 0; x < 100; x++) {
    const product: IProduct = {
      name: faker.commerce.productName(),
      image: faker.image.imageUrl(),
      price: Number(faker.commerce.price()),
      description: faker.random.words(20),
      createdDate: new Date(),
      updatedDate: new Date()
    };

    await knex.insert(product).into('Product');
  }
}
