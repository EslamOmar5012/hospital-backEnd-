import { Router } from "express";

import { devState, registerAdmin } from "./auth.service.js";

const router = Router();

//add admin api
router.post("/register", registerAdmin);

router.post("/login", devState);

router.post("/logout", devState);

export default router;
