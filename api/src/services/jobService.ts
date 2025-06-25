import fs from "fs";
import path from "path";

const techsData: Record<string, string[]> = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../../src/techs.json"), "utf-8")
);

const includesAny = (text: string, terms: string[]): boolean => {
  return terms.some((term) => {
    const escapedTerm = term.replace(/[.+]/g, "\\$&");
    const regex = new RegExp(`(?<!\\.)\\b${escapedTerm}\\b`, "i");
    return regex.test(text);
  });
};

export const processTexts = (jobText: string, cvText: string) => {
  const jobLower = jobText.toLowerCase();
  const cvLower = cvText.toLowerCase();

  const techsInJob = Object.keys(techsData).filter((tech) =>
    includesAny(jobLower, techsData[tech])
  );

  const techsInCV = Object.keys(techsData)
    .filter((tech) => includesAny(cvLower, techsData[tech]))
    .filter((tech) => techsInJob.includes(tech));

  const missingTechs = techsInJob.filter((tech) => !techsInCV.includes(tech));
  const matchedCount = techsInJob.length - missingTechs.length;
  const compatibility =
    techsInJob.length > 0
      ? Number(((matchedCount / techsInJob.length) * 100).toFixed(2))
      : 0;

  return {
    techsInJob,
    techsInCV,
    missingTechs,
    compatibility,
  };
};
