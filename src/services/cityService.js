import CITY from '../models/cityModel.js';

export const cityService = {
  getAllCities: () => {
    try {
      return CITY.find({});
    } catch (error) {
      throw new Error(error);
    }
  },

  getCity: (id) => {
    try {
      return CITY.findOne({ _id: id });
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
      return USER.deleteOne({ _id: id });
    } catch (error) {
      throw new Error(error);
    }
  },

  updateCity: (id, newCityData) => {
    try {
      return USER.findByIdAndUpdate(id, { ...newCityData }, { new: true });
    } catch (error) {
      throw new Error(error);
    }
  },
};
