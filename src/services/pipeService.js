import PIPE from '../models/pipeModels.js';

export const pipeService = {
  getAllPipes: () => {
    try {
      return PIPE.find({});
    } catch (error) {
      throw new Error(error);
    }
  },

  getPipe: (id) => {
    try {
      return PIPE.findOne({ _id: id });
    } catch (error) {
      throw new Error(error);
    }
  },

  createPipe: (newCity) => {
    try {
      return PIPE.create(newCity);
    } catch (error) {
      throw new Error(error);
    }
  },

  deletePipe: (id) => {
    try {
      return PIPE.findByIdAndUpdate(
        id,
        { deletedAt: new Date() },
        { new: true }
      );
    } catch (error) {
      throw new Error(error);
    }
  },

  updatePipe: (id, newCityData) => {
    try {
      return PIPE.findByIdAndUpdate(id, { ...newCityData }, { new: true });
    } catch (error) {
      throw new Error(error);
    }
  },
};
