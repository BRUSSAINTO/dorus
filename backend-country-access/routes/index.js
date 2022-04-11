const router = require("express").Router();
const routerCountry = require("./country");

router.use("/", routerCountry);

module.exports = router;
