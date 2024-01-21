"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Collection, {
        foreignKey: "brandId",
      });
      models.Collection.belongsTo(models.Brand);
    }
  }
  Brand.init(
    {
      id: { type: DataTypes.STRING, primaryKey: true },
      name: DataTypes.STRING,
      image: DataTypes.TEXT,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Brand",
    }
  );
  return Brand;
};
