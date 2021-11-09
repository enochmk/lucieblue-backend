const express = require('express');
const { addUser } = require('../controllers/users.controller');

const router = express.Router();

router.route('/').post(addUser);

module.exports = router;
