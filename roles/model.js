import knex from 'knex';
const knexConfig = {
  client: 'sqlite3',
  connection: {
    filename: './data/rolex.db3'
  },
  useNullAsDefault: true, // required only for sqlite3
  debug: true,
}

const db = knex(knexConfig);

const find = () => db('roles');
const findById = (id) => db('roles').where({ id }).first();
const add = (newRole) => db('roles').insert(newRole, 'id');
const update = (id, changes) => db('roles').where({ id }).update(changes);
const remove = (id) => db('roles').where({ id }).del();


const Roles = {
  find,
  findById,
  add,
  update,
  remove,
};

export default Roles;
