import { Router } from 'express';
import { createUser } from '../../controllers/users.controller';
import { login } from '../../common/login';

const router = Router();

router.post('/signup', createUser);

router.post('/login', login);

export default router;
