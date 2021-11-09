const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const chalk = require('chalk');
const dotenv = require('dotenv');

const errorHandler = require('./middleware/errorHandler');

const app = express();
dotenv.config();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use('/users/', require('./routes/users.route'));
app.use(errorHandler);

// Set server port to listen
const PORT = process.env.PORT || 3000;
const MESSAGE = `Lucieblue Backend started in ${process.env.NODE_ENV} on port: ${PORT}`;

app.listen(PORT, () => console.log(chalk.black.bgGreen(MESSAGE)));
