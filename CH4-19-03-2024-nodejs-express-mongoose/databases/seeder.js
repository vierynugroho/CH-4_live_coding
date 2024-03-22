require('dotenv').config();
const fs = require('fs');
const mongoose = require('mongoose');
const Customer = require('../models/customerModel');

const DB = process.env.DATABASE_URL;

mongoose.connect(DB).then((con) => {
	console.log('connection ke database sukses');
});

const customers = fs.readFileSync('./data/customers.json', 'utf-8');

const importData = async () => {
	try {
		await Customer.create(JSON.parse(customers));
		console.log('Data sukses di import!!');
	} catch (error) {
		console.log(error.message);
	}
};

const clearData = async () => {
	try {
		await Customer.deleteMany();
		console.log('Data sukses di clear!');
	} catch (error) {
		console.log(error.message);
	} finally {
		process.exit();
	}
};

if (process.argv[2] == '--import') {
	importData();
} else if (process.argv[2] == '--delete') {
	clearData();
}
