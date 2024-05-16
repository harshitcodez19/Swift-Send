import { Router } from "express";
import {
  getAccountBalance,
  transferPayment,
} from "../controller/account.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
const router = Router();

router.route("/balance").get(authMiddleware, getAccountBalance);
router.route("/transfer").post(authMiddleware, transferPayment);
export default router;
