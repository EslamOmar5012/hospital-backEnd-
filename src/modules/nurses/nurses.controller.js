import { Router } from "express";
import { getNurses, getOneNurse, createNurse } from "./nurses.service.js";

const router = Router();

router.get("/", getNurses);

router.get("/:id", getOneNurse);

router.post("/", createNurse);

export default router;
