import { AuthRepo } from '../respositories/authRepo';

export class AuthService {
  authRepo: any;

  constructor() {
    this.authRepo = new AuthRepo();
  }

  //create a new user
  async createUser(data: Object) {
    return await this.authRepo.createUser(data);
  }

  //find a user by id
  async findUser(id: string){
    return await this.authRepo.findUser(id)
  }
}
