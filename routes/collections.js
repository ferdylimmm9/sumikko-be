const express = require("express");
const router = express.Router();
//controller
const {
  collectionMutationController,
  collectionQueryController,
} = require("../controllers/collection.controller");
//middleware
const { validateCollectionPayload } = require("../middlewares/collection");
const { validateToken } = require("../middlewares/auth");
//constant
const { methodType } = require("../constant/constant");

router.get("/", collectionQueryController(methodType.index));
router.get("/:id", collectionQueryController(methodType.view));

//authorized method
router.post(
  "/",
  validateToken,
  validateCollectionPayload,
  collectionMutationController(methodType.create)
);
router.patch(
  "/:id",
  validateToken,
  validateCollectionPayload,
  collectionMutationController(methodType.update)
);
router.delete(
  "/:id",
  validateToken,
  collectionMutationController(methodType.delete)
);
module.exports = router;
