import express, { NextFunction, Request, Response, Router } from 'express';
import { AuthController } from '../controllers/authController';
import { AuthService } from '../services/auth.Service';
import { StatusCode } from '../utils/consts';

const authRoute: Router = express.Router();

//find user by id
authRoute.get(
  '/:id',
  async (_req: Request, _res: Response, _next: NextFunction) => {
    try {
      const controller = new AuthController(new AuthService());
      const respone = await controller.getUserById(_req.params.id);
      _res.status(StatusCode.Accepted).json(respone);
    } catch (error: any | unknown) {
      console.log(error);
    }
  }
);

//create a new user
// authRoute.post('/sign-up', signUp);

export default authRoute;
