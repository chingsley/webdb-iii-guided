
exports.up = function (knex) {
  return knex.schema.createTable('roles', function (table) {
    table.increments();
    table.string('name', 128).notNullable().unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('roles');
};
