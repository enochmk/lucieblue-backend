const asyncHandler = require('../middleware/async');
const UserRepo = require('../models/User.model');

/**
 * @description: Add a new user to database
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


/**
 * @description: Get all users from the DB
 */
exports.getUsers = asyncHandler(async (req, res, next) => {
	const User = UserRepo();

	const result = await User.find();

	return res.send({
		status: true,
		message: result,
	});
});


/**
 * @description: delete one user by ID from the DB
 */
exports.deleteUser = asyncHandler(async (req, res, next) => {
	const User = UserRepo();

	const response = await User.delete({
		ID: req.params.id,
	});

	return res.send({
		status: true,
		message: response,
	});
});


/**
 * @description: get a user from DB
 */
exports.getUser = asyncHandler(async (req, res, next) => {
	const User = UserRepo();

	const response = await User.find({
		ID: req.params.id,
	});

	return res.send({
		status: true,
		message: response,
	});
});


/**
 * @description: Aupdate a user in database
 */
exports.updateUser = asyncHandler(async (req, res, next) => {
	const User = UserRepo();

	const response = await User.update(req.params.id, {
		FIRSTNAME: req.body.firstName,
		SURNAME: req.body.lastName,
		PHONE_NUMBER: req.body.phoneNumber,
	});

	return res.send({
		status: true,
		message: response,
	});
});


/**
 * @description: Change user Password
 */
exports.changePassword = asyncHandler(async (req, res, next) => {
	const User = UserRepo();

	const response = await User.update(req.params.id, {
		PASSWORD: req.body.password,
	});

	return res.send({
		status: true,
		message: response,
	});
});
