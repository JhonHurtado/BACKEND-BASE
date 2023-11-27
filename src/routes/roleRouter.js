import {Router} from 'express';
import {createRole,deleteRole,getRole,getRoles,updateRole} from '../controllers/roleController.js';
import {validateRole} from '../validators/role.js';

const router = Router();

router.get('/', getRoles)
router.get('/:id',getRole )
router.post('/',validateRole, createRole)
router.put('/:id', updateRole)
router.delete('/:id', deleteRole)

export default router;