import { LanguageSwitcher } from "./LanguageSwitcher";
import { ModeToggle } from "./ModeToggle";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const { t } = useTranslation();

  return (
    <header className="w-full border-b border-border bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <h1 className="text-xl font-semibold">{t("navbar.title")}</h1>
        <div className="flex gap-2 items-center">
          <LanguageSwitcher />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
