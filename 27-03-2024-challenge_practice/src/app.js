require('dotenv/config');

const express = require('express');
const cors = require('cors');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes');

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

//! Routes
app.use(router);

app.listen(PORT, () => {
	console.log(`Ramadhan Kareem! http://localhost:${PORT}`);
});

module.exports = app;
