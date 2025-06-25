import React from "react";
import { useTranslation } from "react-i18next";
import type { ResumeAnalysisResult } from "../types/resumeAnalysisTypes";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

interface ResultDisplayProps {
  result: ResumeAnalysisResult | null;
}

// Mapeia cor do texto para fundo correspondente (modo claro / escuro)
const bgColorMap: Record<string, string> = {
  "text-red-600": "bg-red-100",
  "text-yellow-600": "bg-yellow-100",
  "text-green-600": "bg-green-100",
  "text-gray-800": "bg-gray-200 dark:bg-gray-700",
  "text-gray-200": "bg-gray-700 dark:bg-gray-200",
};

// Função auxiliar para escolher fundo conforme textColor, trata casos com 'dark:' dentro da string
function getBgColor(textColor: string) {
  // Se tem 'dark:' na string, extrai só a classe de texto light mode para buscar o bg correto
  if (textColor.includes("dark:")) {
    // Exemplo: 'text-gray-800 dark:text-gray-200' -> pega 'text-gray-800'
    const lightColor = textColor.split(" ")[0];
    return bgColorMap[lightColor] ?? "bg-gray-100";
  }
  return bgColorMap[textColor] ?? "bg-gray-100";
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  const { t } = useTranslation();

  if (!result) return null;

  const compatibility = result.compatibility ?? 0;

  const compatibilityColor =
    compatibility <= 25
      ? "bg-red-600 text-red-600"
      : compatibility <= 70
      ? "bg-yellow-600 text-yellow-600"
      : "bg-green-600 text-green-600";

  const hasCVTechs = result.techsInCV.length > 0;
  const hasMissingTechs = result.missingTechs.length > 0;

  const renderTechList = (techs: string[], textColor: string) => {
    if (techs.length === 0) {
      return <span className={textColor}>{t("home.result.noneTechs")}</span>;
    }

    const bgColor = getBgColor(textColor);

    return (
      <ul className="flex flex-wrap gap-2">
        {techs.map((tech, i) => (
          <li
            key={i}
            className={`px-2 py-1 rounded text-xs font-medium ${textColor} ${bgColor}`}
          >
            {tech}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="mt-6 max-w-2xl w-full mx-auto">
      <h3 className="text-lg font-semibold text-center mb-4">
        {t("home.result.title")}
      </h3>

      <div className="bg-muted/60 dark:bg-muted/20 p-4 rounded-lg shadow-sm">
        <Table>
          <TableBody className="space-y-2">
            <TableRow>
              <TableCell className="font-medium">
                {t("home.result.jobTechs")}
              </TableCell>
              <TableCell>
                {renderTechList(
                  result.techsInJob,
                  "text-gray-800 dark:text-gray-200"
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                {t("home.result.resumeTechs")}
              </TableCell>
              <TableCell>
                {renderTechList(
                  result.techsInCV,
                  hasCVTechs ? "text-green-600" : "text-red-600"
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                {t("home.result.missingTechs")}
              </TableCell>
              <TableCell>
                {renderTechList(
                  result.missingTechs,
                  hasMissingTechs ? "text-red-600" : "text-green-600"
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                {t("home.result.compatibility")}
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span
                    className={`${compatibilityColor.replace(
                      "bg-",
                      "text-"
                    )}`}
                  >
                    {compatibility.toFixed(0)}%
                  </span>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded">
                    <div
                      className={`h-2 rounded ${compatibilityColor}`}
                      style={{ width: `${compatibility}%` }}
                    />
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
