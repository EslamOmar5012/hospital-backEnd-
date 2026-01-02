import { Router } from "express";

import { registerAdmin, loginAdmin, logoutAdmin } from "./auth.service.js";

const router = Router();

//add admin api
router.post("/register", registerAdmin);

router.post("/login", loginAdmin);

router.post("/logout", logoutAdmin);

export default router;
