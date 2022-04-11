const router = require("express").Router();
const { checkAccess } = require("../controllers/country");
const { countryValidator } = require("../validation/country-validation");

router.get("/:countryName", countryValidator, checkAccess);

module.exports = router;
