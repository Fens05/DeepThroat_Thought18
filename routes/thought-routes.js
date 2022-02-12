const router = require("express").Router();
const { getAllThoughts, getThoughtsbyId, }

router
    .route('/')
    .get(getThoughtbyId)
    .put(updateThought)
    .get(getT)

router
    .get("/:userID/:thoughtId")
    .