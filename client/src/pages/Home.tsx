import React, { useState } from "react";
import { TextArea } from "../components/TextArea";
import { FileUploader } from "../components/FileUploader";
import { ResultDisplay } from "../components/ResultDisplay";
import { analyzeResumeTexts } from "../api/resumeAnalysisApi";
import type { ResumeAnalysisResult } from '../types/resumeAnalysisTypes';

export const Home: React.FC = () => {
  const [vagaText, setVagaText] = useState("");
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
      <h1>Analisador de Vaga x CV</h1>

      <TextArea
        label="Texto da vaga"
        value={vagaText}
        onChange={setVagaText}
        placeholder="Cole aqui o texto da vaga..."
      />

      <TextArea
        label="Texto do CV"
        value={cvText}
        onChange={setCvText}
        placeholder="Cole aqui o texto do CV..."
      />

      <FileUploader onFileTextRead={setCvText} />

      <button
        onClick={handleSubmit}
        disabled={loading || !vagaText || !cvText}
        style={{
          marginTop: 16,
          padding: "10px 20px",
          fontSize: 16,
          cursor: loading || !vagaText || !cvText ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Analisando..." : "Analisar"}
      </button>

      {error && <p style={{ color: "red", marginTop: 12 }}>{error}</p>}

      <ResultDisplay result={result} />
    </main>
  );
};
