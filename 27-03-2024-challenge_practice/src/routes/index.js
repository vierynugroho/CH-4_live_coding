const router = require('express').Router();

const customer_route = require('./customerRouter');
const admin_route = require('./adminRouter');

router.use('/api/v1/customers', customer_route);
router.use('/customers/dashboard', admin_route);

module.exports = router;
