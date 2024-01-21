const Joi = require("joi");

const validateBrandPayload = async (req, res, next) => {
  const body = req.body;

  const schema = Joi.object()
    .keys({
      name: Joi.string().required(),
      description: Joi.string().required(),
      image: Joi.string().required(),
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
  validateBrandPayload,
};
