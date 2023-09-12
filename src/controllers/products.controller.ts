import { Request, Response } from 'express';
import { errorHandler } from '../common/errorHandler';
import Products from '../models/Products';

async function getProducts(req: Request, res: Response) {
  try {
    const products = await Products.findAll({
      attributes: ['id', 'name', 'price', 'categoryId', 'userId'],
    });
    res.status(200).send({ products });
  } catch (e) {
    errorHandler(e as Error, res);
  }
}

async function getProductById(req: Request, res: Response) {
  const { productId } = req.params;
  try {
    const product = await Products.findByPk(productId, { attributes: ['id', 'name', 'price', 'categoryId', 'userId'] });
    res.status(200).send({
      product,
    });
  } catch (e) {
    errorHandler(e as Error, res);
  }
}

async function createProduct(req: Request, res: Response) {
  try {
    const product = await Products.create(
      {
        name: req.body.name,
        price: req.body.price,
        categoryId: req.body.categoryId,
        userId: req.body.userId,
      },
      {
        fields: ['name', 'price', 'categoryId', 'userId'],
      }
    );
    res.status(201).send({ product });
  } catch (e) {
    errorHandler(e as Error, res);
  }
}

async function editProduct(req: Request, res: Response) {
  const { productId } = req.params;
  try {
    let product = await Products.findByPk(productId);
    if (!product) {
      return res.status(404).send("We couldn't find the product");
    }
    const editedFields = {
      ...req.body,
    };
    product.set({
      ...product,
      ...editedFields,
    });
    await product.save();
    res.status(200).send({ product });
  } catch (e) {
    errorHandler(e as Error, res);
  }
}

async function deleteProductById(req: Request, res: Response) {
  const { productId } = req.params;
  try {
    await Products.destroy({ where: { id: productId } });
    res.status(204).send();
  } catch (e) {
    errorHandler(e as Error, res);
  }
}

export { getProducts, getProductById, createProduct, editProduct, deleteProductById };
