const { celebrate, Joi } = require("celebrate");

const countryValidator = celebrate({
  params: Joi.object().keys({
    countryName: Joi.string().min(3).max(10),
  }),
});

module.exports = { countryValidator };
