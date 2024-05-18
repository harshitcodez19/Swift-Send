import { Router } from "express";
const router = Router();
import { authMiddleware } from "../middleware/auth.middleware.js";
import {
  signInUser,
  signUpUser,
  updateUser,
  bulkUser,
} from "../controller/user.controller.js";

router.route("/login").post(signInUser);

router.route("/signup").post(signUpUser);

router.route("/updateuser").put(authMiddleware, updateUser);

router.route("/bulkuser").get(bulkUser);
export default router;
