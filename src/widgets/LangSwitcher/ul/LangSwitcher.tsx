import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button";

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  function onClick() {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  }

  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={onClick}
    >
      {t("Язык")}
    </Button>
  );
};

export default LangSwitcher;
