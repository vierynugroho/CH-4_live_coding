require('dotenv/config');

const express = require('express');
const cors = require('cors');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes');
const flash = require('connect-flash');
const session = require('express-session');

//! config
const app = express();
const PORT = process.env.PORT || '2000';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//! middleware
app.use(cors());
app.use(express.json());
app.use(logger('dev'));
app.use(
	session({
		secret: 'apalah',
		saveUninitialized: true,
		resave: true,
	})
);
app.use(flash());

//! Routes
app.use(router);

app.listen(PORT, () => {
	console.log(`Ramadhan Kareem! http://localhost:${PORT}`);
});

module.exports = app;
