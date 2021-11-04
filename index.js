const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const chalk = require('chalk');
const dotenv = require('dotenv');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
dotenv.config();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.get('/', async (req, res) => {
	const data = await prisma.cust_orders.findMany();

	res.send(data);
});

// Set server port to listen
const PORT = process.env.PORT || 3000;
const MESSAGE = `Lucieblue Backend started in ${process.env.NODE_ENV} on port:${PORT}`;

app.listen(PORT, () => console.log(chalk.black.bgGreen(MESSAGE)));
