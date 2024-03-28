const router = require('express').Router();

const admin_controller = require('../controllers/adminController');

router.get('/', admin_controller.customerPage);
router.get('/create', admin_controller.createCustomerPage);
router.post('/create', admin_controller.createCustomer);

module.exports = router;
