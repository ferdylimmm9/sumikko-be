const express = require("express");
const router = express.Router();
//middleware
const { validateUserPayload } = require("../middlewares/user");
const { validateToken } = require("../middlewares/auth");
//controller
const {
  userQueryController,
  userMutationController,
} = require("../controllers/user.controller");
//constant
const { methodType } = require("../constant/constant");

router.get("/", validateToken, userQueryController(methodType.index));
router.get("/:id", validateToken, userQueryController(methodType.view));
router.post(
  "/",
  validateToken,
  validateUserPayload,
  userMutationController(methodType.create)
);
router.patch(
  "/:id",
  validateToken,
  validateUserPayload,
  userMutationController(methodType.update)
);
router.delete("/:id", validateToken, userMutationController(methodType.delete));

module.exports = router;
