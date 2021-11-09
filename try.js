const express = require('express');
const moment = require('moment');
const path = require('path');
// const mysql = require('mysql');
// const cors = require('cors');
// const morgan = require('morgan');
const chalk = require('chalk');
const dotenv = require('dotenv');

const app = express();
dotenv.config();


const PORT = process.env.PORT || 8000;
const MESSAGE = `lucieblue started in ${process.env.NODE_ENV} and its listening on PORT: ${PORT}`;

app.listen(PORT, () => console.log(MESSAGE));


