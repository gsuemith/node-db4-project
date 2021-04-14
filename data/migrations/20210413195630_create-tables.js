
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments()
      tbl.string('name', 128).notNullable()
      tbl.timestamp('created_at').defaultTo(Date())
    })
    .createTable('steps', tbl => {
      tbl.increments();
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.integer('step_number').unsigned().notNullable()
      tbl.text('instructions').notNullable()
    })
    .createTable('ingredients', tbl => {
      tbl.increments()
      tbl.string('name', 64).unique().notNullable()
    })
    .createTable('step_ingredients', tbl => {
      tbl.increments()
      tbl.integer('step_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('steps')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT');
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT');
      tbl.float('quantity', 3, 10).notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .droptTableIfExists('step_ingredients')
    .droptTableIfExists('ingredients')
    .droptTableIfExists('steps')
    .droptTableIfExists('recipes')
};
