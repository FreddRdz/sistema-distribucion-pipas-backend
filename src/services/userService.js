import UserModel from '../models/userModel.js';

export const userService = {
  getAllUsers: () => {
    try {
      return UserModel.find({ deletedAt: { $ne: null } });
    } catch (error) {
      throw new Error(error);
    }
  },
};
