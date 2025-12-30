import { Router } from "express";

import {
  devState,
  checkAdminFormatData,
  checkIfAdminExists,
  registerAdmin,
} from "./auth.service.js";

const router = Router();

//add admin api
router.post("/register", devState);

router.post("/login", devState);

router.post("/logout", devState);

export default router;
