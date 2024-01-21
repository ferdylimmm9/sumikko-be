"use strict";
const { Model } = require("sequelize");
const { Brand } = require("../models");

module.exports = (sequelize, DataTypes) => {
  class Collection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Collection.init(
    {
      id: { type: DataTypes.STRING, primaryKey: true },
      name: DataTypes.STRING,
      price: DataTypes.NUMBER,
      description: DataTypes.TEXT,
      image: DataTypes.TEXT,
      stock: DataTypes.NUMBER,
      brandId: {
        references: Brand,
        key: "id",
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Collection",
    }
  );
  return Collection;
};
