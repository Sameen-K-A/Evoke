import { Router, RequestHandler } from "express";
import AuthController from "../controller/authController";

const authController = new AuthController();
const router = Router();

router.post("/login", authController.login as RequestHandler);
router.post("/google/auth", authController.googleLogin as RequestHandler);
router.post("/register", authController.register as RequestHandler);

export default router;