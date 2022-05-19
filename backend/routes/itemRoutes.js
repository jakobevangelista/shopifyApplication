const express = require('express');
const router = express.Router();
const {
  getItems,
  setItem,
  updateItem,
  deleteItem,
} = require('../controllers/itemController');

router.route('/getItems').get(getItems);
router.route('/setItem').post(setItem);
router.route('/updateItem/:id').put(updateItem);
router.route('/deleteItem/:id').delete(deleteItem);

module.exports = router;
