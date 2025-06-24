import React from "react";
import type { ResumeAnalysisResult } from '../types/resumeAnalysisTypes';

interface ResultDisplayProps {
  result: ResumeAnalysisResult | null;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  if (!result) return null;

  return (
    <div style={{ marginTop: 24 }}>
      <h3>Resultados da Análise</h3>
      <p><strong>Tecnologias na vaga:</strong> {result.techsInJob.join(", ") || "Nenhuma"}</p>
      <p><strong>Tecnologias no CV:</strong> {result.techsInCV.join(", ") || "Nenhuma"}</p>
      <p><strong>Tecnologias faltando:</strong> {result.missingTechs.join(", ") || "Nenhuma"}</p>
      {result.compatibility !== undefined && <p><strong>Nota:</strong> {result.compatibility.toFixed(0)}%</p>}
    </div>
  );
};
