const jwt = require("jsonwebtoken");
const { salt } = require("../constant/constant");
const { methodType } = require("../constant/constant");
const { User } = require("../models");
const { nanoid } = require("nanoid");

const loginController = async (req, res) => {
  try {
    const body = req.body;
    const token = jwt.sign(body, salt);
    const user = await User.findOne({
      where: {
        email: body.email,
      },
    });
    if (user) {
      const valid = user.password === body.password;
      if (valid) {
        return res.status(200).send({
          status: "success",
          message: "Login successfull",
          accessToken: token,
          data: user,
        });
      } else {
        return res.status(400).send({
          status: "error",
          message: "email or password not valid",
        });
      }
    } else {
      return res.status(404).send({
        status: "error",
        message: "Email not found",
      });
    }
  } catch (e) {
    res.status(500).send({
      message: e,
      status: "error",
    });
  }
};

const registerController = async (req, res) => {
  try {
    const body = req.body;
    const id = nanoid();
    const user = {
      id,
      ...body,
    };

    await User.create(user);

    const token = jwt.sign(user, salt);

    return res.status(201).send({
      status: "success",
      message: "Register successfull",
      accessToken: token,
    });
  } catch (e) {
    res.status(500).send({
      message: e,
      status: "error",
    });
  }
};

const userQueryController =
  (type = methodType.index) =>
  async (req, res) => {
    try {
      const { id } = req.params;

      if (type === methodType.index) {
        const users = await User.findAll();

        return res.status(200).send({
          message: "user list",
          data: users,
          status: "success",
        });
      } else if (type === methodType.view) {
        const user = await User.findByPk(id);
        return res.status(200).send({
          message: "user show",
          status: "success",
          data: user,
        });
      } else {
        return res.status(405).send({
          message: "method not allowed",
        });
      }
    } catch (e) {
      return res.status(500).send({
        message: e,
        status: "error",
      });
    }
  };

const userMutationController =
  (type = methodType.create) =>
  async (req, res) => {
    try {
      const body = req.body;
      const { id } = req.params;

      if (type === methodType.create) {
        const id = nanoid();
        const user = {
          id,
          ...body,
        };

        await User.create(user);
        return res.status(201).send({
          message: "user created",
          status: "success",
          data: user,
        });
      } else if (type === methodType.update) {
        const user = await User.findByPk(id);
        if (!!user) {
          await user.update(body);
          await user.save();
          return res.status(200).send({
            message: "user updated",
            status: "success",
            data: body,
          });
        } else {
          return res.status(400).send({
            status: "error",
            message: "update user failed",
          });
        }
      } else if (type === methodType.delete) {
        const user = await User.findByPk(id);
        if (!!user) {
          await user.destroy();
          return res.status(200).send({
            message: "user deleted",
            status: "success",
            data: body,
          });
        } else {
          return res.status(400).send({
            status: "error",
            message: "delete user failed",
          });
        }
      } else {
        return res.status(405).send({
          message: "method not allowed",
        });
      }
    } catch (e) {
      return res.status(500).send({
        message: e,
        status: "error",
      });
    }
  };

module.exports = {
  loginController,
  registerController,
  userQueryController,
  userMutationController,
};
