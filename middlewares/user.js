const Joi = require("joi");

const validateUserPayload = async (req, res, next) => {
  const body = req.body;

  const schema = Joi.object()
    .keys({
      email: Joi.string().email().required(),
      name: Joi.string(),
      phoneNumber: Joi.string(),
      password: Joi.string(),
      address: Joi.string(),
    })
    .options({ stripUnknown: true });

  const error = schema.validate(body).error;
  if (error) {
    return res.status(400).json({
      status: "error",
      error: error.details,
      message: error.message,
    });
  } else {
    next();
  }
};

module.exports = {
  validateUserPayload,
};
