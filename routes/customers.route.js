const express = require('express');
const { addCustomer, deleteCustomer, getCustomer } = require('../controllers/customers.controllers');

const router = express.Router();

router.route('/').post(addCustomer);

router.route('/:id').delete(deleteCustomer).get(getCustomer);

module.exports = router;