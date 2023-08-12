/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('marvel_characters', (table) => {
      table.increments('id').primary()
      table.text('name').notNullable()
      table.text('description')
      table.text('thumbnail')

      table.timestamps(true, true);
    })
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('marvel_characters')
  };