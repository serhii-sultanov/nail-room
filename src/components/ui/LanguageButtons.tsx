import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/utils/i18next";
import clsx from "clsx";

export const LangButtonts: FC = () => {
  const { t } = useTranslation();
  const changeLanguage = useCallback((lang: string) => {
    i18n.changeLanguage(lang);
  }, []);
  return (
    <div className="flex max-lg:flex-col">
      <button
        className={clsx(
          i18n.language === "ua" ? "text-green" : "text-black text-opacity-60",
          "px-1 max-lg:py-1 max-lg:px-0 font-semibold uppercase text-sm border-r-2 border-black border-opacity-80 max-lg:border-b-2 max-lg:border-r-0"
        )}
        onClick={() => changeLanguage("ua")}
      >
        {t("ua")}
      </button>
      <button
        className={clsx(
          i18n.language === "en" ? "text-green" : "text-black text-opacity-60",
          "px-1 max-lg:py-1 max-lg:px-0 font-semibold uppercase text-sm border-r-2 border-black border-opacity-80 max-lg:border-b-2 max-lg:border-r-0"
        )}
        onClick={() => changeLanguage("en")}
      >
        {t("en")}
      </button>
      <button
        className={clsx(
          i18n.language === "ru" ? "text-green" : "text-black opacity-80",
          "px-1 max-lg:py-1 max-lg:px-0 font-semibold uppercase text-sm"
        )}
        onClick={() => changeLanguage("ru")}
      >
        {t("ru")}
      </button>
    </div>
  );
};
