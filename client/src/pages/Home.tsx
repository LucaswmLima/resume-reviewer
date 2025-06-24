import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { TextArea } from "../components/TextArea";
import { FileUploader } from "../components/FileUploader";
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
    <main style={{ maxWidth: 800, margin: "40px auto", padding: 20 }}>
      <TextArea
        label={t("home.jobTextTitle")}
        value={vagaText}
        onChange={setJobText}
        placeholder={t("home.jobTextPlaceholder")}
      />

      <TextArea
        label={t("home.resumeTextTitle")}
        value={cvText}
        onChange={setCvText}
        placeholder={t("home.resumeTextPlaceholder")}
      />

      <FileUploader onFileTextRead={setCvText} />

      <Button
        variant="outline"
        onClick={handleSubmit}
        disabled={loading || !vagaText || !cvText}
      >
        {loading ? t("home.analysingButton") : t("home.analyseButton")}
      </Button>

      {error && <p style={{ color: "red", marginTop: 12 }}>{error}</p>}

      <ResultDisplay result={result} />
    </main>
  );
};
