import { Router } from "express";
import { getNurses } from "./nurses.service.js";

const router = Router();

router.get("/", getNurses);

export default router;
