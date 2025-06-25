export const validateJobRequest = (data: any) => {
  const errors: string[] = [];

  if (!data.jobText || typeof data.jobText !== "string" || data.jobText.trim() === "") {
    errors.push("vagaText is required and must be a non-empty string.");
  }

  if (!data.cvText || typeof data.cvText !== "string" || data.cvText.trim() === "") {
    errors.push("cvText is required and must be a non-empty string.");
  }

  return errors;
};
