import mongoose from 'mongoose';

const CitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  waterLevel: {
    type: String,
    required: true,
    default: 'Normal',
  },

  pipes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pipe',
    },
  ],

  coordinates: [
    [
      {
        type: Array,
        required: true,
      },
    ],
  ],

  deletedAt: {
    type: Date,
  },
});

const CityModel = mongoose.model('City', CitySchema);

export default CityModel;
