import { Router } from "express";
import {
  getConsaltants,
  getOneConsaltant,
  createConsultant,
  editConsultant,
  deleteConsultant,
} from "./consultants.service.js";

const router = Router();

router.get("/", getConsaltants);

router.get("/:id", getOneConsaltant);

router.post("/", createConsultant);

router.patch("/:id", editConsultant);

router.delete("/:id", deleteConsultant);

export default router;
