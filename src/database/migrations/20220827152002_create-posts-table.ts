import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('posts',(table:Knex.TableBuilder) => {
        table.increments().primary().notNullable().unique();
        table.string('title').notNullable();
        table.string('picture').nullable();
        table.string('info').notNullable();
        table.timestamps(true,true);
        // hasMany comments
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('posts')
}

