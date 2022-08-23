import mongoose from 'mongoose';

export const connectToDb = (URI_DATABASE) => {
  try {
    mongoose.connect(URI_DATABASE, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('Connection to database successful!');
  } catch (error) {
    console.log(error);
  }
};
