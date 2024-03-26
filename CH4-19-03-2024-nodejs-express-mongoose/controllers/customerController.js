const Customer = require('./../models/customerModel');

const getCustomers = async (req, res, next) => {
	try {
		//! Basic Filter
		const queryObj = { ...req.query };
		const excludedColumns = ['page', 'sort', 'limit', 'fields'];

		excludedColumns.forEach((el) => delete queryObj[el]);

		//! Advance Filter
		let queryStr = JSON.stringify(queryObj);
		queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
		let query = Customer.find(JSON.parse(queryStr));

		//! Sorting
		if (req.query.sort) {
			const sortBy = req.query.sort.split(',').join(' ');
			query = query.sort(sortBy);
		} else {
			query = query.sort('-createdAt');
		}

		//! field limiting
		if (req.query.fields) {
			const fields = req.query.fields.split(',').join(' ');
			query = query.select(fields);
		} else {
			query = query.select('-__v');
		}

		//! Pagination
		// page=3&limit=2 -> data ke 5 dan 6
		const page = req.query.page * 1 || 1;
		const limit = req.query.limit * 1 || 2;
		const skip = (page - 1) * limit;

		if (req.query.page) {
			let numCustomers = await Customer.countDocuments();
			if (skip > numCustomers) throw new Error('Page does not exist!');
		}

		query = query.skip(skip).limit(limit);

		const customers = await query;

		res.status(200).json({
			status: 'success',
			totalData: customers.length,
			requestAt: req.requestTime,
			data: {
				customers,
			},
		});
	} catch (error) {
		res.status(400).json({
			status: 'failed',
			message: error.message,
		});
	}
};

const getCustomerById = async (req, res, next) => {
	try {
		const id = req.params.id;
		const customer = await Customer.findById(id);

		res.status(200).json({
			status: 'success',
			data: {
				customer,
			},
		});
	} catch (error) {
		res.status(400).json({
			status: 'failed',
			message: error.message,
		});
	}
};

const createCustomer = async (req, res) => {
	try {
		const newCustomer = await Customer.create(req.body);

		res.status(201).json({
			status: 'success',
			data: {
				customer: newCustomer,
			},
		});
	} catch (error) {
		res.status(400).json({
			status: 'failed',
			message: error.message,
		});
	}
};

const updateCustomer = async (req, res) => {
	try {
		const id = req.params.id;
		const customer = await Customer.findByIdAndUpdate(id, req.body, {
			new: true,
			runValidators: true,
		});

		res.status(200).json({
			status: 'success',
			message: 'update success',
			data: customer,
		});
	} catch (error) {
		res.status(400).json({
			status: 'failed',
			message: error.message,
		});
	}
};

const deleteCustomer = async (req, res) => {
	try {
		const id = req.params.id;
		await Customer.findByIdAndDelete(id, req.body, {
			runValidators: true,
		});

		res.status(200).json({
			status: 'success',
			message: 'delete success',
		});
	} catch (error) {
		res.status(400).json({
			status: 'failed',
			message: error.message,
		});
	}
};

module.exports = {
	getCustomers,
	getCustomerById,
	createCustomer,
	updateCustomer,
	deleteCustomer,
};
