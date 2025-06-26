import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { TextArea } from "../components/TextArea";
import { ResultDisplay } from "../components/ResultDisplay";
import { analyzeResumeTexts } from "../api/resumeAnalysisApi";
import type { ResumeAnalysisResult } from "../types/resumeAnalysisTypes";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  loadStorageResumeText,
  saveStorageResumeText,
  clearStorageResumeText,
} from "../utils/localStorageUtil";

export const Home: React.FC = () => {
  const { t } = useTranslation();

  const [vagaText, setJobText] = useState("");
  const [resumeText, setResumeText] = useState("");
  const [result, setResult] = useState<ResumeAnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [remember, setRemember] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await analyzeResumeTexts(vagaText, resumeText);
      setResult(res);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const saved = loadStorageResumeText();
    if (saved) {
      setResumeText(saved);
      setRemember(true);
    }
  }, []);

  useEffect(() => {
    if (remember) {
      saveStorageResumeText(resumeText);
    } else {
      clearStorageResumeText();
    }
  }, [remember, resumeText]);

  return (
    <main className="container mx-auto my-10 p-4">
      <div className="flex flex-col md:flex-row gap-6 mb-6">
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
            value={resumeText}
            onChange={setResumeText}
            placeholder={t("home.resumeTextPlaceholder")}
          />
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={remember}
              onCheckedChange={(checked) => setRemember(checked === true)}
            />
            <label>{t("home.rememberResume")}</label>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-2">
        <Button
          variant="outline"
          onClick={handleSubmit}
          disabled={loading || !vagaText || !resumeText}
        >
          {loading ? t("home.analysingButton") : t("home.analyseButton")}
        </Button>
      </div>

      {error && <p className="text-red-600 text-center mb-4">{error}</p>}

      <div className="flex justify-center">
        <ResultDisplay result={result} />
      </div>
    </main>
  );
};
