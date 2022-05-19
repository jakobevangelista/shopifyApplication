const express = require('express');
const router = express.Router();
const {
  getManufacturers,
  setManufacturer,
  updateManufacturer,
  deleteManufacturer,
} = require('../controllers/manufacturerController');

router.route('/').get(getManufacturers).post(setManufacturer);
router.route('/:id').delete(deleteManufacturer).put(updateManufacturer);

module.exports = router;
