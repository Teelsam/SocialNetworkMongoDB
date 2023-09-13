const { Schema, Types, model } = require('mongoose'); //requires mongoose package
const moment = require('moment');//requires moment package for date creation


const reactionSchema = new Schema( //creates a dataset with its specifics
    {
        reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
        reactionBody: { type: String, required: true },
        username: { type: String, required: true },
        createdAt: { type: Date, default: Date.now, get: timeCreated => moment(timeCreated).format('MM DD YYYY, hh:mm a') }
    },
    {
        toJSON: { //allows virtuals and getters
            virtuals: true,
            getters: true
        }
    }
);
const thoughtSchema = new Schema(//creates a dataset with its specifics
    {
        thoughtText: String,
        createdAt: {
            type: Date, default: Date.now, get: timeCreated => moment(timeCreated).format('MM DD YYYY, hh:mm a')
        },
        username: {
            type: String, required: true,
        },
        reactions: [reactionSchema],

    },
    {
        toJSON: {//allows virtuals and getters
            virtuals: true,
            getters: true,
        }
    }
)
thoughtSchema.virtual('reactionCount').get(function () { //creates a virtual for thoughtSchema, meaning a usable function
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;