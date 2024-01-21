const { methodType } = require("../constant/constant");
const { nanoid } = require("nanoid");
const { Brand } = require("../models");

const brandMutationController =
  (type = methodType.create) =>
  async (req, res) => {
    try {
      const body = req.body;
      const { id } = req.params;

      if (type === methodType.create) {
        const id = nanoid();
        const brand = {
          id,
          ...body,
        };

        await Brand.create(brand);

        return res.status(201).send({
          message: "brand created",
          status: "success",
          data: brand,
        });
      } else if (type === methodType.update) {
        const brand = await Brand.findByPk(id);

        if (!!brand) {
          await brand.update(body);
          await brand.save();

          return res.status(200).send({
            message: "brand updated",
            status: "success",
            data: body,
          });
        } else {
          return res.status(400).send({
            status: "error",
            message: "update brand failed",
          });
        }
      } else if (type === methodType.delete) {
        const brand = await Brand.findByPk(id);

        if (!!brand) {
          await brand.destroy();

          return res.status(200).send({
            message: "brand deleted",
            status: "success",
            data: body,
          });
        } else {
          return res.status(400).send({
            status: "error",
            message: "delete brand failed",
          });
        }
      } else {
        return res.status(405).send({
          message: "method not allowed",
          status: "error",
        });
      }
    } catch (e) {
      return res.status(500).send({
        message: e,
        status: "error",
      });
    }
  };

const brandQueryController =
  (type = methodType.index) =>
  async (req, res) => {
    try {
      const { id } = req.params;

      if (type === methodType.index) {
        const brands = await Brand.findAll();
        return res.status(200).send({
          message: "brand list",
          status: "success",
          data: brands,
        });
      } else if (type === methodType.view) {
        const brand = await Brand.findByPk(id);
        if (brand) {
          return res.status(200).send({
            message: "brand show",
            status: "success",
            data: brand,
          });
        } else {
          return res.status(404).send({
            status: "error",
            message: "brand not found",
          });
        }
      } else {
        return res.status(405).send({
          message: "method not allowed",
          status: "error",
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
  brandMutationController,
  brandQueryController,
};
