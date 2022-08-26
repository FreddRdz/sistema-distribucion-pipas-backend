import UserModel from '../models/userModel.js';

export const userService = {
  getAllUsers: () => {
    try {
      return UserModel.find({});
    } catch (error) {
      throw new Error(error);
    }
  },

  getUserById: (id) => {
    try {
      return UserModel.findOne({ _id: id });
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

  getUserByEmail: (email) => {
    try {
      return UserModel.findOne({ email: email });
    } catch (error) {
      throw new Error(error);
    }
  },
};
