const asyncHandler = require('express-async-handler');

const Manufacturer = require('../models/manufacturerModel');

// @desc    Get manufacturers
// @route   GET /api/manufactuers
// @access  Public
const getManufacturers = asyncHandler(async (req, res) => {
  const manufacturer = await Manufacturer.find();

  res.status(200).json(manufacturer);
});

// @desc    Get specific manufacturers
// @route   GET /api/manufactuers
// @access  Public
const getSpecificManufacturers = asyncHandler(async (req, res) => {
  const manufacturer = await Manufacturer.find(req.params.id);

  res.status(200).json(manufacturer);
});

// @desc    Set manufacturer
// @route   POST /api/manufactuers
// @access  Public
const setManufacturer = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error('Please add a name');
  }

  const manufacturer = await Manufacturer.create({
    name: req.body.name,
  });

  res.status(200).json(manufacturer);
});

// @desc    Update manufacturers
// @route   PUT /api/manufacturers/:id
// @access  Private
const updateManufacturer = asyncHandler(async (req, res) => {
  const manufacturer = await Manufacturer.findById(req.params.id);

  if (!manufacturer) {
    res.status(400);
    throw new Error('Manufacturer not found');
  }

  const updatedManufacturer = await Manufacturer.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedManufacturer);
});

// @desc    Delete manufacturer
// @route   DELETE /api/manufacturers/:id
// @access  Public
const deleteManufacturer = asyncHandler(async (req, res) => {
  const manufacturer = await Manufacturer.findById(req.params.id);

  if (!manufacturer) {
    res.status(400);
    throw new Error('Manufacturer not found');
  }

  await manufacturer.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getManufacturers,
  setManufacturer,
  updateManufacturer,
  deleteManufacturer,
  getSpecificManufacturers,
};
