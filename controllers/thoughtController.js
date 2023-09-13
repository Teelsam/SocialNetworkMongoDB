const { Thought } = require('../models'); //imports thought model

module.exports = {
    async getThoughts(req, res) { //gets all thoughts
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async get1Thought(req, res) { //gets a thought by id
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
                .select('-__v');
            if (!thought) {
                return res.status(404).json({ message: "no such thought" });
            }
            res.json(thought);
        } catch (err) {
            res.status(404).json(err);
        }

    },
    async createThought(req, res) {//create a thought
        try {
            const thought = await Thought.create(req.body);
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteThought(req, res) {//deletes a thought
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
            if (!thought) {
                return res.status(404).json({ message: "no such thought" });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async addReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $push: { reactions: req.body } });
            res.json(thought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
}