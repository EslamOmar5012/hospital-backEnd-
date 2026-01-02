import { Router } from "express";
import { getConsaltants, getOneConsaltant } from "./consultants.service.js";

const router = Router();

router.get("/", getConsaltants);

router.get("/:id", getOneConsaltant);

export default router;
