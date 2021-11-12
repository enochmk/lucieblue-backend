const express = require('express');
const { addCustomer, deleteCustomer, getCustomer, getCustomers, updateCustomer } = require('../controllers/customers.controllers');

const router = express.Router();

router.route('/').post(addCustomer);

router.route('/').get(getCustomers);

router.route('/:id').delete(deleteCustomer).get(getCustomer).put(updateCustomer);

module.exports = router;