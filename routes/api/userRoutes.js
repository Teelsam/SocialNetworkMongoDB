const router = require('express').Router();
const { getUsers, get1User, createUser } = require('../controllers/userController');

router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(get1User);

module.exports = router;