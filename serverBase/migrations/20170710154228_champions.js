
exports.up = function(knex, Promise) {
  return knex.schema.createTable('champions', function(table){
    table.increments('id').primary();
    table.string('Champion_Name', 255).notNullable().default('');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("books");
};
