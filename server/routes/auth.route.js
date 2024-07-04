import express from "express";
import { signup, signin, googleOAuth } from "../controllers/auth.controller.js";

const router = express.Router();
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/oauth/google", googleOAuth);
export default router;
