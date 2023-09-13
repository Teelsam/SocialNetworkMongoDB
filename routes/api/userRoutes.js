const router = require('express').Router();//requires express package
const { getUsers, get1User, createUser, deleteUser } = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser); //sets users/ api routes
router.route('/:userId').get(get1User).delete(deleteUser);//sets users/id api routes

module.exports = router;