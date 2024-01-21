const Joi = require("joi");
const jwt = require("jsonwebtoken");
const { salt, unauthorized } = require("../constant/constant");

const validateToken = async (req, res, next) => {
  const authorization = req.headers.authorization;
  jwt.verify(authorization, salt, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        status: "error",
        message: unauthorized,
      });
    } else {
      next();
    }
  });
};

const validateLogin = async (req, res, next) => {
  const body = req.body;
  const schema = Joi.object()
    .keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    })
    .options({ stripUnknown: true });

  const error = schema.validate(body).error;
  if (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
      error: error.details,
    });
  } else {
    next();
  }
};

const validateRegister = async (req, res, next) => {
  const body = req.body;

  const schema = Joi.object()
    .keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      password_confirmation: Joi.any()
        .equal(Joi.ref("password"))
        .required()
        .label("Password Confirmation")
        .options({ messages: { "any.only": "{{#label}} does not match" } }),
      name: Joi.string().required(),
      phoneNumber: Joi.string(),
    })
    .options({ stripUnknown: true });

  const error = schema.validate(body).error;
  if (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
      error: error.details,
    });
  } else {
    next();
  }
};

module.exports = {
  validateToken,
  validateRegister,
  validateLogin,
};
