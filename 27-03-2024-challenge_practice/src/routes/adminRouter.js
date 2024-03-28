const router = require('express').Router();

const admin_controller = require('../controllers/adminController');

router.get('/', admin_controller.customerPage);
router.get('/create', admin_controller.createCustomerPage);
router.post('/create', admin_controller.createCustomer);
router.get('/edit/:id', admin_controller.editCustomerPage);
router.post('/edit/:id', admin_controller.editCustomer);
router.post('/delete/:id', admin_controller.deleteCustomer);

module.exports = router;
