import UserModel from '../models/userModel.js';

export const userService = {
  getAllUsers: () => {
    try {
      return UserModel.find({ deletedAt: { $ne: null } });
    } catch (error) {
      throw new Error(error);
    }
  },

  getOneUser: (id) => {
    try {
      return UserModel.find({ _id: id });
    } catch (error) {
      throw new Error(error);
    }
  },

  createUser: (newUser) => {
    try {
      return UserModel.create(newUser);
    } catch (error) {
      throw new Error(error);
    }
  },

  deleteUser: (id) => {
    try {
      return UserModel.findByIdAndUpdate(
        id,
        { deletedAt: new Date() },
        { new: true }
      );
    } catch (error) {
      throw new Error(error);
    }
  },

  updateUser: (id, newUserData) => {
    try {
      return UserModel.findByIdAndUpdate(id, { ...newUserData }, { new: true });
    } catch (error) {
      throw new Error(error);
    }
  },
};
