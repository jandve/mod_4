import { Router } from 'express';
import { getUserById, getUsers, createUser, editUser, deleteUsersById } from '../../controllers/users.controller';

const router = Router();

router.get('/', getUsers);

router.get('/:userId', getUserById);

router.post('/', createUser);

router.put('/:userId', editUser);

router.delete('/:userId', deleteUsersById);

export default router;
