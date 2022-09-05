import mongoose from 'mongoose';

const PipeSchema = new mongoose.Schema({
  placas: {
    type: String,
    unique: true,
    required: true,
  },

  percentageWater: {
    type: Number,
    default: 0,
  },

  available: {
    type: Boolean,
    default: true,
  },

  capacity: {
    type: Number,
    required: true,
  },

  createdAt: {
    type: Date,
    default: new Date(),
  },

  deletedAt: {
    type: Date,
  },
});

const PipeModel = mongoose.model('Pipe', PipeSchema);

export default PipeModel;
