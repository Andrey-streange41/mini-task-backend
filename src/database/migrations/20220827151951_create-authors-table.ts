import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('authors',(table:Knex.TableBuilder) => {
        table.increments().primary().notNullable().unique();
        table.string('nickname').notNullable();
        table.string('avatar').nullable();
        table.timestamps(true,true);
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('authors')
}

