const router = require("express").Router();
const userpostsRoutes = require("./userposts");

// post routes
router.use("/userposts", userpostsRoutes);

module.exports = router;