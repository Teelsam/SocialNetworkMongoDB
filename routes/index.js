const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);//sets a route starting folder of /api/

module.exports = router;