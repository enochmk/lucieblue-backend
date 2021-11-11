const express = require('express');
const { addUser, deleteUser, getUsers, getUser, updateUser, changePassword } = require('../controllers/users.controller');

const router = express.Router();

router.route('/').post(addUser).get(getUsers);

router.route('/changePassword/:id').put(changePassword);

router.route('/:id').delete(deleteUser).get(getUser).put(updateUser);


module.exports = router;