export const loadStorageResumeText = (): string | null => {
  return localStorage.getItem("resumeText");
};

export const saveStorageResumeText = (text: string): void => {
  localStorage.setItem("resumeText", text);
};

export const clearStorageResumeText = (): void => {
  localStorage.removeItem("resumeText");
};
