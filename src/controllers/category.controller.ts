import { Request, Response } from 'express';
import { errorHandler } from '../common/errorHandler';
import Categories from '../models/Categories';
import Products from '../models/Products';

async function getCategories(req: Request, res: Response) {
  try {
    const category = await Categories.findAll({
      attributes: ['id', 'name', 'userId'],
    });
    res.status(200).send({ category });
  } catch (e) {
    errorHandler(e as Error, res);
  }
}

async function getCategoriesById(req: Request, res: Response) {
  const { categoryId } = req.params;
  try {
    const category = await Categories.findByPk(categoryId, {
      attributes: ['id', 'name', 'userId'],
    });
    res.status(200).send({
      category,
    });
  } catch (e) {
    errorHandler(e as Error, res);
  }
}

async function createCategory(req: Request, res: Response) {
  try {
    const category = await Categories.create(
      {
        name: req.body.name,
        userId: req.body.userId,
      },
      {
        fields: ['name', 'userId'],
      }
    );
    res.status(201).send({ category });
  } catch (e) {
    errorHandler(e as Error, res);
  }
}

async function editCategory(req: Request, res: Response) {
  const { categoryId } = req.params;
  try {
    let category = await Categories.findByPk(categoryId);
    if (!category) {
      return res.status(404).send("We couldn't find the category");
    }
    const editedFields = {
      ...req.body,
    };
    category.set({
      ...category,
      ...editedFields,
    });
    await category.save();
    res.status(200).send({ category });
  } catch (e) {
    errorHandler(e as Error, res);
  }
}

async function deleteCategoryById(req: Request, res: Response) {
  const { categoryId } = req.params;
  try {
    await Categories.destroy({ where: { id: categoryId } });
    res.status(204).send();
  } catch (e) {
    errorHandler(e as Error, res);
  }
}

async function getCategoriesWithProductsByUserId(req: Request, res: Response) {
  const { userId } = req.params;
  try {
    const response = await Categories.findAll({
      where: { userId },
      include: [
        {
          model: Products,
        },
      ],
    });
    res.status(200).send(response);
  } catch (e) {
    errorHandler(e as Error, res);
  }
}

export {
  getCategories,
  getCategoriesById,
  createCategory,
  editCategory,
  deleteCategoryById,
  getCategoriesWithProductsByUserId,
};
