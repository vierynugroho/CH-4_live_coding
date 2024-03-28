const { Customer } = require('../databases/models');

const customerPage = async (req, res) => {
	try {
		const customers = await Customer.findAll();

		res.render('customer/index', {
			customers,
		});
	} catch (error) {
		res.render('error.ejs', {
			message: error.message,
		});
	}
};

const createCustomerPage = async (req, res) => {
	try {
		res.render('customer/create');
	} catch (error) {
		res.render('error.ejs', {
			message: error.message,
		});
	}
};

const createCustomer = async (req, res) => {
	try {
		await Customer.create(req.body);
		res.redirect('/customers/dashboard');
	} catch (error) {
		res.render('error.ejs', {
			message: error.message,
		});
	}
};

module.exports = { customerPage, createCustomerPage, createCustomer };
