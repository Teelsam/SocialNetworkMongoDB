const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true, trimmed: true },
    email: { type: String, unique: true, required: true }
    thoughts: [{}]
},
    {
        toJSON: {
            virtuals: true,
        }
    }
)

userSchema.virtual().get(function () {
    return;
});