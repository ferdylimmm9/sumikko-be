const salt = "supersecret";
const unauthorized = "unauthorized";

const methodType = {
  update: "update",
  delete: "delete",
  create: "create",
  index: "index",
  view: "view",
};

module.exports = {
  salt,
  unauthorized,
  methodType,
};
