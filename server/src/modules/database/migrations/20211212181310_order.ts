import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('Order', table => {
    table
      .string('id', 150)
      .notNullable()
      .primary();

    table
      .integer('userId')
      .nullable()
      .unsigned()
      .references('id')
      .inTable('User')
      .onDelete('CASCADE');

    table
      .integer('productId')
      .nullable()
      .unsigned()
      .references('id')
      .inTable('Product')
      .onDelete('CASCADE');

    table.dateTime('createdDate').notNullable();
    table.dateTime('updatedDate').notNullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('Order');
}
