const router = require('express').Router();
const appRoutes = require('./appRoutes');
const userRoutes = require('./userRoutes');
//routes apps to appRoutes content
router.use('/apps', appRoutes);
//routes apps to userRoutes content
router.use('/users', userRoutes);
//exports the routed routes
module.exports = router;
