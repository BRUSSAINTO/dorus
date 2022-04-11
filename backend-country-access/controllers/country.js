const { countryDB } = require("../constants/countryDB");
const NotFoundError = require("../errors/not-found-err");

const checkAccess = (req, res, next) => {
  const statusCodeNumber = {
    accepted: 200,
    rejected: 400,
  };
  for (accessType in countryDB) {
    if (Array.isArray(countryDB[accessType])) {
      if (
        countryDB[accessType].find(
          (country) =>
            country.toUpperCase() === req.params.countryName.toUpperCase()
        )
      ) {
        return res
          .status(statusCodeNumber[accessType])
          .send({ message: `${req.params.countryName} is ${accessType}` });
      }
    }
  }
  next(new NotFoundError(`${req.params.countryName} not found in database`));
};

module.exports = {
  checkAccess,
};
