import bcrypt from 'bcryptjs';

export const encrypt = async (password) => {
  return await bcrypt.hash(password, 10);
};

export const compare = async (passwordPlain, hashPassword) => {
  return await bcrypt.compare(passwordPlain, hashPassword);
};
