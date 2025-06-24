import type { ResumeAnalysisResult } from '../types/resumeAnalysisTypes';


export const analyzeResumeTexts = async (
  jobText: string,
  cvText: string
): Promise<ResumeAnalysisResult> => {
  const response = await fetch("/api/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ jobText, cvText }),
  });
  console.log(response.body);
  
  if (!response.ok) {
    throw new Error("Erro ao analisar textos");
  }

  return response.json();
};
