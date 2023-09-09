const router = require('express').Router();

const userRoutes = require('./userRoutes');

//routes apps to userRoutes content
router.use('/users', userRoutes);
//exports the routed routes
module.exports = router;
