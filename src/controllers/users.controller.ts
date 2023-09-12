import { Request, Response } from 'express';
import { errorHandler } from '../common/errorHandler';
import Users from '../models/Users';

async function getUsers(req: Request, res: Response) {
  try {
    const users = await Users.findAll({
      attributes: ['id', 'name', 'email', 'state'],
    });
    res.status(200).send({ users });
  } catch (e) {
    errorHandler(e as Error, res);
  }
}

async function getUserById(req: Request, res: Response) {
  const { userId } = req.params;
  try {
    const user = await Users.findByPk(userId, { attributes: ['id', 'name', 'email', 'state'] });
    res.status(200).send({
      user,
    });
  } catch (e) {
    errorHandler(e as Error, res);
  }
}

async function createUser(req: Request, res: Response) {
  try {
    const user = await Users.create(
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      },
      {
        fields: ['name', 'email', 'password'],
      }
    );
    res.status(201).send({ user });
  } catch (e) {
    errorHandler(e as Error, res);
  }
}

async function editUser(req: Request, res: Response) {
  const { userId } = req.params;
  try {
    let user = await Users.findByPk(userId);
    if (!user) {
      return res.status(404).send("We couldn't find the user");
    }
    const editedFields = {
      ...req.body,
    };
    user.set({
      ...user,
      ...editedFields,
    });
    await user.save();
    res.status(200).send({ user });
  } catch (e) {
    errorHandler(e as Error, res);
  }
}

async function deleteUsersById(req: Request, res: Response) {
  const { userId } = req.params;
  try {
    await Users.destroy({ where: { id: userId } });
    res.status(204).send();
  } catch (e) {
    errorHandler(e as Error, res);
  }
}

export { getUsers, getUserById, createUser, editUser, deleteUsersById };
