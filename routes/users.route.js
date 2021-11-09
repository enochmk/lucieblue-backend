const express = require('express');
const { addUser,deleteUser, getUsers, getUser} = require('../controllers/users.controller');

const router = express.Router();

router.route('/').post(addUser).get(getUsers);

router.route('/:id').delete(deleteUser).get(getUser);

module.exports = router;
