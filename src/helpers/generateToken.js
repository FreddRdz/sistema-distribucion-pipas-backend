import jwt from 'jsonwebtoken';

export const signToken = async (user) => {
  return jwt.sign(
    {
      _id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '2m',
    }
  );
};
