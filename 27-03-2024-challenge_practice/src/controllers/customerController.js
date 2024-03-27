const { Customer } = require('../databases/models');

const createCustomer = async (req, res) => {
	const { name, age, email, city, password } = req.body;
	try {
		const newCustomer = await Customer.create({
			name,
			age,
			email,
			city,
			password,
		});

		res.status(200).json({
			status: 'ok',
			data: newCustomer,
		});
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = { createCustomer };
