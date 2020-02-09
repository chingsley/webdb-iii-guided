import knex from 'knex';
import knexConfig from '../knexfile';

const db = knex(knexConfig.development);

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
