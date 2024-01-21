const express = require("express");
const router = express.Router();
//middleware
const { validateBrandPayload } = require("../middlewares/brand");
const { validateToken } = require("../middlewares/auth");
//controller
const {
  brandQueryController,
  brandMutationController,
} = require("../controllers/brand.controller");
//constant
const { methodType } = require("../constant/constant");

router.get("/", brandQueryController(methodType.index));
router.get("/:id", brandQueryController(methodType.view));
router.post(
  "/",
  validateToken,
  validateBrandPayload,
  brandMutationController(methodType.create)
);
router.patch(
  "/:id",
  validateToken,
  validateBrandPayload,
  brandMutationController(methodType.update)
);
router.delete(
  "/:id",
  validateToken,
  brandMutationController(methodType.delete)
);

module.exports = router;
