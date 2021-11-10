const express = require('express');
const { addCustomer } = require('../controllers/customers.controllers');

const router = express.Router();

router.route('/').post(addCustomer)

module.exports = router;