const Joi = require("joi");

const validateCollectionPayload = async (req, res, next) => {
  const body = req.body;

  const schema = Joi.object()
    .keys({
      name: Joi.string().required(),
      price: Joi.number().min(0).required(),
      description: Joi.string().required(),
      image: Joi.string().required(),
      stock: Joi.number().min(0).required(),
      brandId: Joi.string().required(),
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
  validateCollectionPayload,
};
