const router = require("express").Router();
const userRoutes = require("./user-routes.js");
// const characterRoutes = require("./character-routes.js");
// const partyRoutes = require("./party-routes.js");
// const statisticRoutes = require("./statistic-routes.js");

router.use("/users", userRoutes);
// router.use("/character", characterRoutes);
// router.use("/party", partyRoutes);
// router.use("/statistics", statisticRoutes);

module.exports = router;
