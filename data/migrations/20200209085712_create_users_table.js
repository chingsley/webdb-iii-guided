
exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('name', 128).notNullable().unique();
    table.integer('role_id').unsigned().references('id').inTable('roles').onDelete('CASCADE').onUpdate('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');

};
