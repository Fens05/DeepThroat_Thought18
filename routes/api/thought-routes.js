const router = require("express").Router();
const { get } = require("..");
const {
    getAllThoughts,
    getThoughtsbyId,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// api's for thoughts
router.route('/').get(getAllThoughts);


//api thought-id
router
    .route('/')
    .get(getThoughtbyId)
    .put(updateThought)
    .get(getT)

router
    .get(":thoughtId")
    .post(addThought)
    .get(getThoughtbyId)
    .put(updateThought)
    .delete(removeThought);

// though reations
router.route(':thoughtId/:reatcionId').post(addReaction);

router.route(':thoughtId/:reationId').delete(removeReation);

module.exports = router;