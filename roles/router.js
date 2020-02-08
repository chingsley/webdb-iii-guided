import express from 'express';
import RoleController from './controller';
const router = express.Router();


router.get('/', RoleController.findAllRoles);
router.get('/:id', RoleController.findOneRole);
router.post('/', RoleController.addNewRole);
router.put('/:id', RoleController.updateRole);
router.delete('/:id', RoleController.removeRole);

export default router;
