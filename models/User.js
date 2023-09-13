const { Schema, model } = require('mongoose');

const userSchema = new Schema({//creates a dataset with its specifics
    username: { type: String, unique: true, required: true, trimmed: true },
    email: { type: String, unique: true, required: true },
    thoughts: [{ type: Schema.Types.ObjectId, ref: "Thought" }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
},
    {
        toJSON: {//allows virtuals 
            virtuals: true,
        }
    }
)

userSchema.virtual("FriendCount").get(function () { //a virutal for userSchema, or a usable function
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User; 