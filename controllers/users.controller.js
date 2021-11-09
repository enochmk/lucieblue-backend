const asyncHandler = require('../middleware/async');
const UserRepo = require('../models/User.model');

/**
 * @description Add a new user to database
 */
exports.addUser = asyncHandler(async (req, res, next) => {
	const User = UserRepo();

	const response = await User.save({
		FIRSTNAME: req.body.firstname,
		SURNAME: req.body.lastname,
		USERNAME: req.body.username,
		PASSWORD: req.body.password,
		PHONE_NUMBER: req.body.phoneNumber,
		STATUS: 1,
	});

	return res.send({
		status: true,
		message: response,
	});
});
