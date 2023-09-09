const { Schema, model } = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true, trimmed: true },
    email: { type: String, unique: true, required: true },
    thoughts: [{ type: Schema.type.ObjectId, ref: "Thought" }],
    friends: [{ type: Schema.type.ObjectId, ref: 'User' }]
},
    {
        toJSON: {
            virtuals: true,
        }
    }
)

userSchema.virtual().get(function () {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User; 