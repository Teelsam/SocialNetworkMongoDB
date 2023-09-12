const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.127017/socialMediaDB'); //connects to mongodb 

module.exports = mongoose.connection;