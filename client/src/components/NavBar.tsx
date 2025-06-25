import { LanguageSwitcher } from "./LanguageSwitcher";
import { ModeToggle } from "./ModeToggle";
import { useTranslation } from "react-i18next";
import LOGO from "../assets/logo.png"

export function Navbar() {
  const { t } = useTranslation();

  return (
    <header className="w-full border-b border-border bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="logo-name flex items-center gap-4">
          <img src={LOGO} alt="" className="h-10 w-auto"/>
          <h1 className="text-xl font-semibold">{t("navbar.title")}</h1>
        </div>

        <div className="flex gap-2 items-center">
          <LanguageSwitcher />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
