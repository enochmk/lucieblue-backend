const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const folderName = path.dirname(__dirname).split('/').pop();

module.exports = {
	appName: 'LUCIEBLUE',
	port: process.env.PORT ?? 5006,
	NODE_ENV: process.env.NODE_ENV ?? 'development',
	DATABASE_URL: process.env.DATABASE_URL,
	logs: {
		windows: path.join('C:', 'logs', folderName),
		linux: path.join('home', 'verification', 'logs', folderName),
	},
};
