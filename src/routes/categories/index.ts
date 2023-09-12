import { Router } from 'express';
import {
  getCategories,
  getCategoriesById,
  createCategory,
  editCategory,
  deleteCategoryById,
} from '../../controllers/category.controller';

const router = Router();

router.get('/', getCategories);

router.get('/:categoryId', getCategoriesById);

router.post('/', createCategory);

router.put('/:categoryId', editCategory);

router.delete('/:categoryId', deleteCategoryById);

export default router;
