import { useTranslation } from "react-i18next";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

import BR from "../assets/flags/br.svg";
import US from "../assets/flags/us.svg";
import ES from "../assets/flags/es.svg";
import FR from "../assets/flags/fr.svg";
import DE from "../assets/flags/de.svg";
import CN from "../assets/flags/cn.svg";

const languages = [
  { code: "pt", label: "Português", flag: BR },
  { code: "en", label: "English", flag: US },
  { code: "es", label: "Español", flag: ES },
  { code: "fr", label: "Français", flag: FR },
  { code: "de", label: "Deutsch", flag: DE },
  { code: "zh", label: "中文", flag: CN },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" title="Change language">
          <Globe className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map(({ code, label, flag }) => (
          <DropdownMenuItem
            key={code}
            onClick={() => i18n.changeLanguage(code)}
            className="flex items-center gap-2"
          >
            <img src={flag} alt={label} className="h-4 rounded-sm object-contain" />
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
