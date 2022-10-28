import CITY from '../models/cityModel.js';

export const cityService = {
  getAllCities: () => {
    try {
      return CITY.find({}).populate('pipes');
    } catch (error) {
      throw new Error(error);
    }
  },

  getCity: (id) => {
    try {
      return CITY.findOne({ _id: id }).populate('pipes');
    } catch (error) {
      throw new Error(error);
    }
  },

  createCity: (newCity) => {
    try {
      return CITY.create(newCity);
    } catch (error) {
      throw new Error(error);
    }
  },

  deleteCity: (id) => {
    try {
      return CITY.deleteOne({ _id: id });
    } catch (error) {
      throw new Error(error);
    }
  },

  updateCity: (id, newCityData) => {
    try {
      return CITY.findByIdAndUpdate(id, { ...newCityData }, { new: true });
    } catch (error) {
      throw new Error(error);
    }
  },

  addPipeToCity: (id, newPipe) => {
    try {
      return CITY.findByIdAndUpdate(
        id,
        { $push: { pipes: newPipe } },
        { new: true }
      );
    } catch (error) {
      throw new Error(error);
    }
  },

  deletePipeFromCity: (id, deletePipe) => {
    try {
      return CITY.findByIdAndUpdate(
        id,
        { $pull: { pipes: deletePipe } },
        { new: true }
      );
    } catch (error) {
      throw new Error(error);
    }
  },
};
