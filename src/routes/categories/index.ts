import { Router } from 'express';
import {
  getCategories,
  getCategoriesById,
  createCategory,
  editCategory,
  deleteCategoryById,
  getCategoriesWithProductsByUserId,
} from '../../controllers/category.controller';
import { authRequired } from '../../middlewares/auth';

const router = Router();

router.get('/', getCategories);

router.get('/:categoryId', getCategoriesById);

router.post('/', createCategory);

router.put('/:categoryId', editCategory);

router.delete('/:categoryId', deleteCategoryById);

router.get('/:userId/categories-with-products', authRequired, getCategoriesWithProductsByUserId);

export default router;
