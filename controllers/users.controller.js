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

exports.getUsers = asyncHandler(async (req, res, next) => {
	const User = UserRepo();

	const result = await User.find();

	return res.send({
		status: true,
		message: result,
	});
});


exports.deleteUser = asyncHandler(async (req, res, next) => {
	const User = UserRepo();

	console.log(req.params);

	const response = await User.delete({
		ID: req.params.id
	});
	

	return res.send({
		status: true,
		message: response
	});
});

exports.getUser = asyncHandler(async (req, res, next) => {
	const User = UserRepo();

	console.log(req.params);
	
	const response = await User.find({
		ID: req.params.id
	});
	

	return res.send({
		status: true,
		message: response
	});
});

