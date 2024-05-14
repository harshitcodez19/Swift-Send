const express = require("express");
const Router = require("express");

const router = Router();
const { authMiddleware } = require("../middleware/auth.middleware.js");
const {
  signInUser,
  signUpUser,
  updateUser,
  bulkUser,
} = require("../controller/user.controller.js");

router.route("/sigininuser").post(signInUser);

router.route("/signup").post(signUpUser);

router.route("/updateuser").put(authMiddleware, updateUser);

router.route("/bulkuser").get(bulkUser);

module.exports = {
  router,
};
