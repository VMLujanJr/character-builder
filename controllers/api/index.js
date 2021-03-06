const router = require("express").Router();
const userRoutes = require("./user-routes.js");
const partyRoutes = require("./party-routes.js");
const characterRoutes = require("./character-routes.js");

router.use("/users", userRoutes);
router.use("/player_characters", characterRoutes);
router.use("/party", partyRoutes);

module.exports = router;