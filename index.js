const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const chalk = require('chalk');
const dotenv = require('dotenv');
const { createConnection } = require('typeorm');

const logger = require('./utils/logger');
const errorHandler = require('./middleware/errorHandler');

const app = express();
dotenv.config();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use('/users/', require('./routes/users.route'));
app.use('/customers/', require('./routes/customers.route'));
app.use(errorHandler);

// Set server port to listen
const PORT = process.env.PORT || 3000;
const MESSAGE = `Lucieblue Backend started in ${process.env.NODE_ENV} on port: ${PORT}`;

app.listen(PORT, () => console.log(chalk.black.bgGreen(MESSAGE)));

// Connect to the Database and start the application
createConnection()
	.then((_connection) => {
		const DB_message = `Connection to database: ${process.env.DB_HOST} has been established`;
		console.log(chalk.cyan(DB_message));
		logger.info(DB_message);
	})
	.catch((err) => {
		console.log(chalk.red.italic('Unable to connect to database'));
		console.error(err.message);
		process.exit(1);
	});
