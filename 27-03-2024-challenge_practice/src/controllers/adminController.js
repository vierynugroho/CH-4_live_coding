const { Customer } = require('../databases/models');

const customerPage = async (req, res) => {
	try {
		const customers = await Customer.findAll();

		res.render('customer/index', {
			customers,
			message: req.flash('message', ''),
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
		req.flash('message', 'Berhasil Ditambah!');
		res.redirect('/customers/dashboard');
	} catch (error) {
		res.render('error.ejs', {
			message: error.message,
		});
	}
};

const editCustomerPage = async (req, res) => {
	try {
		const customer = await Customer.findByPk(req.params.id);

		res.render('customer/edit', {
			customer,
		});
	} catch (error) {
		res.render('error.ejs', {
			message: error.message,
		});
	}
};

const editCustomer = async (req, res) => {
	try {
		await Customer.update(req.body, {
			where: {
				id: req.params.id,
			},
		});

		req.flash('message', 'Berhasil Diedit!');
		res.redirect('/customers/dashboard');
	} catch (error) {
		res.render('error.ejs', {
			message: error.message,
		});
	}
};

const deleteCustomer = async (req, res) => {
	try {
		await Customer.destroy({
			where: {
				id: req.params.id,
			},
		});
		req.flash('message', 'Berhasil Dihapus!');
		res.redirect('/customers/dashboard');
	} catch (error) {
		res.render('error.ejs', {
			message: error.message,
		});
	}
};

module.exports = {
	customerPage,
	createCustomerPage,
	createCustomer,
	editCustomerPage,
	editCustomer,
	deleteCustomer,
};
