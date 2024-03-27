require('dotenv/config');

module.exports = {
	development: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT,
	},
	test: {
		username: 'postgres',
		password: 'postgres',
		database: 'fsw_ch_practice_test',
		host: '127.0.0.1',
		dialect: 'postgres',
	},
	production: {
		username: 'postgres',
		password: 'postgres',
		database: 'fsw_ch_practice_prod',
		host: '127.0.0.1',
		dialect: 'postgres',
	},
};
