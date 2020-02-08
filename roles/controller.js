import Roles from './model';

const pluralize = count => count > 1 ? `${count} records` : `${count} record`;
const notFound = res => res.status(404).json({ message: `Role not found.` });

const findAllRoles = async (req, res, next) => {
  // db('roles').then(roles => res.status(200).json({ roles })).catch(err => next(err))
  try {
    const roles = await Roles.find();
    res.status(200).json(roles);
  } catch (err) {
    console.log(err);
    next("internal server error");
  }
};

const findOneRole = async (req, res, next) => {
  try {
    const role = await Roles.findById(req.params.id);
    if (role) {
      return res.status(200).json(role);
    } else {
      return notFound(res);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const addNewRole = async (req, res) => {
  try {
    const ids = await Roles.add(req.body);
    res.status(201).json({ ids });
  } catch (err) {
    next(err);
  }
};

const updateRole = async (req, res, next) => {
  const changes = req.body;
  const { id } = req.params;
  try {
    const count = await Roles.update(id, changes);
    if (count > 0) {
      return res.status(200).json({ message: `${pluralize(count)} updated successfully` });
    } else {
      return notFound(res);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const removeRole = async (req, res, next) => {
  const { id } = req.params;
  try {
    const count = await Roles.remove(id);
    if (count > 0) {
      return res.status(200).json({ message: `${pluralize(count)} deleted successfully` });
    } else {
      return notFound(res);
    }
  } catch (err) {
    next(err);
  }
};


const RoleController = {
  findAllRoles,
  findOneRole,
  addNewRole,
  updateRole,
  removeRole,
};

export default RoleController;
