import fs from "fs";
import path from "path";

type CategorizedTechs = Record<string, Record<string, string[]>>;

const rawData = fs.readFileSync(path.resolve(__dirname, "../../src/techs.json"), "utf-8");

const techsData: CategorizedTechs = JSON.parse(rawData);

const techsFlat: Record<string, string[]> = Object.values(techsData).reduce((acc, group) => {
  return { ...acc, ...group };
}, {});

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

  const techsInJob = Object.keys(techsFlat).filter((tech) =>
    includesAny(jobLower, techsFlat[tech])
  );

  const techsInCV = Object.keys(techsFlat)
    .filter((tech) => includesAny(cvLower, techsFlat[tech]))
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
