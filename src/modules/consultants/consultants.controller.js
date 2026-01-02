import { Router } from "express";
import { getConsultants } from "./consultants.service.js";

const router = Router();

router.get("/", getConsultants);

// router.get("/:id", );

export default router;
