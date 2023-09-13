const mongoose = require('mongoose');//requires mongodb package Mongoose.

mongoose.connect('mongodb://127.0.0.1:27017/socialMediaDB'); //connects to mongodb 

module.exports = mongoose.connection; // exports the connection information