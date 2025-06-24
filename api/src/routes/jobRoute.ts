import { Router } from "express";
import { handleJobText } from "../controllers/jobController";

const router = Router();

router.post("/analyze", handleJobText);

export default router;
