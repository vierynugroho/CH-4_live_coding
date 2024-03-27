const router = require('express').Router();

const customer_controller = require('../controllers/customerController');

router.post('/', customer_controller.createCustomer);

module.exports = router;
