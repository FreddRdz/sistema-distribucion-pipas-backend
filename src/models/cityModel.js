import mongoose, { Schema } from 'mongoose';

const CitySchema = new mongoose.Schema = {
  name: {
    type: String,
    required: true,
  },

  coordinateX: {
    type: String,
    required: true,
  },

  coordinateY: {
    type: String,
    required: true,
  },

  pipes: [{
    type: Schema.Types.ObjectId,
    ref: 'Pipa',
  }],

}

const CityModel = mongoose.model('City', CitySchema);

export default CityModel;