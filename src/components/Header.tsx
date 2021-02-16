import React from "react";
import { useTranslation } from "react-i18next";

export const Header: React.FC = () => {
  const { t } = useTranslation();
  return <h1>{t("summaryPage.header")}</h1>;
};
