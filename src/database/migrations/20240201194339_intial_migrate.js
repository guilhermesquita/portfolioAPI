/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('projects', (table) => {
      table.string('id').primary().notNullable().unique();
      table.string('nome').notNullable();
      table.string('github').notNullable().unique();
      table.string('link').unique();
      table.string('type').notNullable()
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
