
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('roles').truncate() // we use .truncate() instead of .del(), because .truncate() will reset the primary keys back to 1 in addition to deleting the data
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        { name: 'Student' },
        { name: 'TA' },
        { name: 'PM' }
      ]);
    });
};
