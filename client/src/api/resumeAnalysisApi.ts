import type { ResumeAnalysisResult } from '../types/resumeAnalysisTypes';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const analyzeResumeTexts = async (
  jobText: string,
  cvText: string
): Promise<ResumeAnalysisResult> => {
  const response = await fetch(`${API_BASE_URL}/api/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ jobText, cvText }),
  });
  
  if (!response.ok) {
    throw new Error("Erro ao analisar textos");
  }

  return response.json();
};
