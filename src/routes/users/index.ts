import { Router } from 'express';
import { getUserById, getUsers, createUser, editUser, deleteUsersById } from '../../controllers/users.controller';
import { authRequired } from '../../middlewares/auth';

const router = Router();

router.get('/', authRequired, getUsers);

router.get('/:userId', authRequired, getUserById);

router.put('/:userId', authRequired, editUser);

router.delete('/:userId', authRequired, deleteUsersById);

export default router;
