const router = require('express').Router();

const {
    getAllThoughts, getThoughtById, addThought, updateThought, deleteThought, addReaction
} = require('../../controllers/thought-controller');

// /THOUGHTS API
router
    .route('/')
    .get(getAllThoughts)

// /User ID API
router
     .route('/:userId')
     .post(addThought);

//thought router api with thogut ID
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)
    .put(addReaction);

module.exports = router;