'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Customer extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Customer.init(
		{
			name: DataTypes.STRING,
			age: DataTypes.INTEGER,
			city: DataTypes.STRING,
			email: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			photo: {
				type: DataTypes.TEXT,
				defaultValue: 'user-default.jpg',
			},
		},
		{
			sequelize,
			modelName: 'Customer',
		}
	);
	return Customer;
};
