import authModel from '../databases/models/authModel';

export class AuthRepo {
  //create a new user
  async createUser(data: Object) {
    try {
      return await authModel.create(data);
    } catch (error: any | unknown) {
      console.log(error);
    }
  }

  async findUser(id: string) {
    try {
      return await authModel.findById(id);
    } catch (error: any | unknown) {
      console.log(error);
    }
  }
}
