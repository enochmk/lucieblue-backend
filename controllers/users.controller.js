const asyncHandler = require('../middleware/async');

/**
 * @description Add a new user to database
 */
exports.addUser = asyncHandler(async (req, res, next) => {
	return res.send({
		status: true,
		message: 'Added a new user',
	});
});
