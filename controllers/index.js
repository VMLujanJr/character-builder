const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

// wildcard, any other endpoint that isn't defined will become a 404 (PAGE NOT FOUND)
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;