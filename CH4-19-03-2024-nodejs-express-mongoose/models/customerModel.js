const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'name cannot be empty'],
	},
	email: {
		type: String,
		unique: true,
	},
	role: {
		type: String,
		enum: ['admin', 'user'],
		default: 'user',
	},
	active: {
		type: Boolean,
		default: true,
	},
	phoneNumber: {
		type: String,
	},
	photo: {
		type: String,
		default: 'user-default.jpg',
	},
	password: {
		type: String,
	},
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
