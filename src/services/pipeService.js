import PIPE from '../models/pipeModels.js';

export const pipeService = {
  getAllPipes: () => {
    try {
      return PIPE.find({ available: true, deletedAt: { $eq: null } });
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

  changeAvailableToFalse: (id) => {
    try {
      return PIPE.findByIdAndUpdate(id, { available: false }, { new: true });
    } catch (error) {
      throw new Error(error);
    }
  },

  changeAvailableToTrue: (id) => {
    try {
      return PIPE.findByIdAndUpdate(id, { available: true }, { new: true });
    } catch (error) {
      throw new Error(error);
    }
  },
};
