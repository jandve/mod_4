import { Request, Response } from 'express';
import Users from '../models/Users';
import jwt from 'jsonwebtoken';

async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  console.log(email, password);
  const user = await Users.findOne({
    attributes: ['id'],
    where: {
      email,
      password,
    },
  });
  if (!user) {
    console.log(user);
    return res.status(404).send({ error: 'Invalid password or email,... please try again.' });
  }
  const token = jwt.sign(
    {
      data: {
        id: user?.dataValues.id,
      },
    },
    process.env.JWT_SECRET as string,
    { expiresIn: '1h' }
  );
  console.log('==>', token);
  res.status(200).send({ token });
}

export { login };
