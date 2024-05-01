import { StatusCode } from '../utils/consts';
import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from 'tsoa';
import { ApiError } from '../Errors/classError';

@Route('Auth')
export class AuthController {
  authService: any;

  constructor(authService: any) {
    this.authService = authService;
  }

  @Get('/{id}')
  public async getUserById(@Path() id: string): Promise<void> {
    try {
      const user = await this.authService.findUser(id);

      if (!user) {
        throw new ApiError('User Not Founded', StatusCode.NotFound);
      }
      return user;
    } catch (error: any | unknown) {
      throw error;
    }
  }
}

// //create a new user
// const signUp = async (_req: Request, _res: Response, _next: NextFunction) => {
//   const { name, email, password, role } = _req.body;
//   try {
//     const user = await authservice.createUser({
//       name,
//       email,
//       password,
//       role,
//     });
//     _res.status(StatusCode.Accepted).json(user);
//   } catch (error: any) {
//     console.log(error);
//   }
// };

// //find all the user
// const findUser = async (_req: Request, _res: Response, _next: NextFunction) => {
//   try {
//     const { id } = _req.params;

//     const user = await authservice.findUser(id);

//     _res.status(StatusCode.Accepted).json(user);
//   } catch (error: any | unknown) {
//     console.log(error);
//   }
// };

// export { signUp, findUser };
