import { Request, Response } from "express";
import { processTexts } from "../services/jobService";
import { validateJobRequest } from "../validations/jobValidations";

export const handleJobText = (req: Request, res: Response): void => {
  const errors = validateJobRequest(req.body);
  if (errors.length > 0) {
    res.status(400).json({ errors });
    return
  }

  const { jobText, cvText } = req.body;
  const result = processTexts(jobText, cvText);
  res.json(result);
};
