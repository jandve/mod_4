import { Router } from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  editProduct,
  deleteProductById,
} from '../../controllers/products.controller';

const router = Router();

router.get('/', getProducts);

router.get('/:productId', getProductById);

router.post('/', createProduct);

router.put('/:productId', editProduct);

router.delete('/:productId', deleteProductById);

export default router;
