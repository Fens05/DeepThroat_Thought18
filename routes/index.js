const router = require("express").Router();
const userRoutes = require("./api/user-routes");
const thoughtRoutes = require("./api/thought-routes");


router.use('/thought', thoughtRoutes);
router.use('/user', userRoutes);


module.exports = router;