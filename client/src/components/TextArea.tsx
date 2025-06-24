import React from "react";

interface TextAreaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, value, onChange, placeholder }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const cleanText = e.target.value.replace(/\s+/g, " ").trim();
    onChange(cleanText);
  };

  return (
    <label style={{ display: "block", marginBottom: 12 }}>
      <strong>{label}</strong>
      <textarea
        style={{ width: "100%", minHeight: 120, padding: 8, fontSize: 16 }}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </label>
  );
};
