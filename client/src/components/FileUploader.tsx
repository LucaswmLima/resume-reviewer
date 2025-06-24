import React from "react";

interface FileUploaderProps {
  onFileTextRead: (text: string) => void;
}

export const FileUploader: React.FC<FileUploaderProps> = ({ onFileTextRead }) => {
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const text = reader.result as string;
      // Limpa o texto lido do arquivo (mesmo padrão do textarea)
      const cleanText = text.replace(/\s+/g, " ").trim();
      onFileTextRead(cleanText);
    };

    if (file.type === "application/pdf") {
        // falta implementar
      alert("Upload de PDF ainda não suportado para extração de texto.");
      return;
    }

    reader.readAsText(file);
  };

  return (
    <div style={{ marginTop: 8 }}>
      <input type="file" accept=".txt,.md,.docx,.pdf" onChange={handleFile} />
    </div>
  );
};
