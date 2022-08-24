import UserModel from '../models/userModel.js';

export const authService = {
  checkEmail: (email) => {
    try {
      return UserModel.find({ email: email });
    } catch (error) {
      throw new Error(error);
    }
  },
};
