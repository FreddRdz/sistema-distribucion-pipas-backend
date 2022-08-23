import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  degree: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    default: 'user',
  },

  createdAt: {
    type: Date,
    default: new Date(),
  },

  deletedAt: {
    type: Date,
  },
});

const UserModel = model('User', UserSchema);

export default UserModel;
