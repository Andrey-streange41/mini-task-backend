import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("comments", (table: Knex.TableBuilder) => {
    table.increments().primary().notNullable().unique();
    table.string("message");
    table.timestamps(true, true);
    table
      .integer("ownerId")
      .references("id")
      .inTable("authors")
       .unsigned()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("postId")
      .unsigned()
      .references("id")
      .inTable("posts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("comments");
}
