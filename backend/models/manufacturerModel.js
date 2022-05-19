const mongoose = require('mongoose');

const manufacturerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Manufacturer', manufacturerSchema);
