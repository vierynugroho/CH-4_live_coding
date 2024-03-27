const router = require('express').Router();

const customer_route = require('./customerRouter');

router.use('/api/v1/customers', customer_route);

module.exports = router;
