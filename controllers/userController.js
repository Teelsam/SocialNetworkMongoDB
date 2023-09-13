const User = require('../models/User');


module.exports = {
    async getUsers(req, res) { //gets users
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async get1User(req, res) {//gets 1 user
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v');
            if (!user) {
                return res.status(404).json({ message: 'no such user' });
            }
            res.json(user);
        } catch (err) {
            res.status(404).json(err);
        }
    },
    async createUser(req, res) {//create a user
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteUser(req, res) {//deletes a user
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });
            if (!user) {
                return res.status(404).json({ message: 'no such user' });
            }
            res.json(user);
        } catch (err) {

            res.status(500).json(err);
        }
    }

}