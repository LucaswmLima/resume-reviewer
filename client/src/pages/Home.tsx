import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { TextArea } from "../components/TextArea";
import { ResultDisplay } from "../components/ResultDisplay";
import { analyzeResumeTexts } from "../api/resumeAnalysisApi";
import type { ResumeAnalysisResult } from '../types/resumeAnalysisTypes';
import { Button } from "@/components/ui/button";

export const Home: React.FC = () => {
  const { t } = useTranslation();

  const [vagaText, setJobText] = useState("");
  const [cvText, setCvText] = useState("");
  const [result, setResult] = useState<ResumeAnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await analyzeResumeTexts(vagaText, cvText);
      setResult(res);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container mx-auto my-10 p-4">
      {/* Container com flex para os textareas lado a lado */}
      <div className="flex gap-6 mb-6">
        <div className="flex-1">
          <TextArea
            label={t("home.jobTextTitle")}
            value={vagaText}
            onChange={setJobText}
            placeholder={t("home.jobTextPlaceholder")}
          />
        </div>
        <div className="flex-1">
          <TextArea
            label={t("home.resumeTextTitle")}
            value={cvText}
            onChange={setCvText}
            placeholder={t("home.resumeTextPlaceholder")}
          />
        </div>
      </div>

      {/* Botão centralizado */}
      <div className="flex justify-center mb-6">
        <Button
          variant="outline"
          onClick={handleSubmit}
          disabled={loading || !vagaText || !cvText}
        >
          {loading ? t("home.analysingButton") : t("home.analyseButton")}
        </Button>
      </div>

      {/* Resultados centralizados */}
      {error && (
        <p className="text-red-600 text-center mb-4">{error}</p>
      )}

      <div className="flex justify-center">
        <ResultDisplay result={result} />
      </div>
    </main>
  );
};
