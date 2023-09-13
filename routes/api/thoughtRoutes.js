const router = require('express').Router();//requires express package
const { getThoughts, get1Thought, createThought, addReaction } = require('../../controllers/thoughtController');


router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId').get(get1Thought);
router.route('/:thoughtId/reactions').post(addReaction);
module.exports = router;