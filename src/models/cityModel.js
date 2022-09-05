import mongoose from 'mongoose';

const CitySchema = new mongoose.Schema({
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

  pipes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pipa',
    },
  ],

  deletedAt: {
    type: Date,
  },
});

const CityModel = mongoose.model('City', CitySchema);

export default CityModel;
