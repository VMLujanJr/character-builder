const router = require("express").Router();
const apiRoutes = require("./api");
const homepageRoutes = require('./homepage-routes.js');
const signupRoutes = require('./signup-routes.js');
const loginRoutes = require('./login-routes.js');
const portalRoutes = require('./portal-routes.js');

router.use("/api", apiRoutes);
router.use("/", homepageRoutes);
router.use("/sign-up", signupRoutes);
router.use("/login", loginRoutes);
router.use("/portal", portalRoutes);

// wildcard, any other endpoint that isn't defined will become a 404 (PAGE NOT FOUND)
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;