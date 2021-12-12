import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('Product', table => {
    table.increments('id').primary();
    table.string('name', 150).notNullable();
    table.string('image', 150);
    table.integer('price', 150).notNullable();
    table.string('description', 1000).notNullable();

    table.dateTime('createdDate').notNullable();
    table.dateTime('updatedDate').notNullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('Product');
}
