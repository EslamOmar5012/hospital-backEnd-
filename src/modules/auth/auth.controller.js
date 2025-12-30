import { Router } from "express";

import { db } from "../../db/index.js";

import { devState } from "./auth.service.js";

const router = Router();

router.post("/register", devState);

router.post("/login", devState);

router.post("/logout", devState);

export default router;
