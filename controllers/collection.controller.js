const { methodType } = require("../constant/constant");
const { Collection } = require("../models");
const { nanoid } = require("nanoid");
const { Brand } = require("../models");

const collectionMutationController =
  (type = methodType.create) =>
  async (req, res) => {
    try {
      const body = req.body;
      const { id } = req.params;

      if (type === methodType.create) {
        const id = nanoid();
        const collection = {
          id,
          ...body,
        };

        await Collection.create(collection);

        return res.status(201).send({
          message: "collection created",
          status: "success",
          data: collection,
        });
      } else if (type === methodType.update) {
        const collection = await Collection.findByPk(id);

        if (!!collection) {
          await collection.update(body);
          await collection.save();

          return res.status(200).send({
            message: "collection updated",
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
        const collection = await Collection.findByPk(id);

        if (!!collection) {
          await collection.destroy();

          return res.status(200).send({
            message: "collection deleted",
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

const collectionQueryController =
  (type = methodType.index) =>
  async (req, res) => {
    try {
      const { id } = req.params;

      if (type === methodType.index) {
        const collections = await Collection.findAll({
          include: Brand,
        });
        return res.status(200).send({
          message: "collection list",
          status: "success",
          data: collections,
        });
      } else if (type === methodType.view) {
        const collection = await Collection.findByPk(id, {
          include: Brand,
        });

        if (collection) {
          return res.status(200).send({
            message: "collection show",
            status: "success",
            data: collection,
          });
        } else {
          return res.status(404).send({
            status: "error",
            message: "collection not found",
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
  collectionMutationController,
  collectionQueryController,
};
