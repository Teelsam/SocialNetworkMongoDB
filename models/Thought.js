const { Schema, Types, model } = require('mongoose');
const moment = require('moment');


const reactionSchema = new Schema(
    {
        reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
        reactionBody: { type: String, required: true },
        username: { type: String, required: true },
        createdAt: { type: Date, default: Date.now, get: timeCreated => moment(timeCreated).format('MM DD YYYY, hh:mm a') }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);
const thoughtSchema = new Schema(
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
        toJSON: {
            virtuals: true,
            getters: true,
        }
    }
)
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;