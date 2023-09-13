const router = require('express').Router();

const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

//routes apps to userRoutes content
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
//exports the routed routes
module.exports = router;
