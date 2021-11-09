const logger = require('../utils/logger');

const errorHandler = (error, req, res, next) => {
	// display error only in development
	if (process.env.NODE_ENV === 'development') {
		logger.info(`Debug error: ${error.message}`, {
			requestID: req.requestID,
			statusCode: error.statusCode || 500,
			stack: error.stack,
		});
	}

	// write to error file log
	logger.error(`Debug Error: ${error.message}`, {
		requestID: req.requestID,
		statusCode: error.statusCode || 500,
		stack: error.stack,
	});

	return res.status(error.statusCode || 500).json({
		requestID: req.requestID,
		success: false,
		message: error.message,
	});
};

module.exports = errorHandler;
