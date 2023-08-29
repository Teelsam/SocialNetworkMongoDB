const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.127017/socialMediaDB');

module.exports = mongoose.connection;