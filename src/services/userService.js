import USER from '../models/userModel.js';

export const userService = {
  getAllUsers: () => {
    try {
      return USER.find({});
    } catch (error) {
      throw new Error(error);
    }
  },

  getUserById: (id) => {
    try {
      return USER.findOne({ _id: id });
    } catch (error) {
      throw new Error(error);
    }
  },

  createUser: (newUser) => {
    try {
      return USER.create(newUser);
    } catch (error) {
      throw new Error(error);
    }
  },

  deleteUser: (id) => {
    try {
      return USER.findByIdAndUpdate(
        id,
        { deletedAt: new Date() },
        { new: true }
      );
    } catch (error) {
      throw new Error(error);
    }
  },

  deleteUserByAdmin: (id) => {
    try {
      return USER.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  },

  updateUser: (id, newUserData) => {
    try {
      return USER.findByIdAndUpdate(id, { ...newUserData }, { new: true });
    } catch (error) {
      throw new Error(error);
    }
  },

  getUserByEmail: (email) => {
    try {
      return USER.findOne({ email: email });
    } catch (error) {
      throw new Error(error);
    }
  },
};
