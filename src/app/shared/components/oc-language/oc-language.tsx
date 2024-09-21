"use-client"
import { useLocale, useTranslations } from "next-intl";
import OcSelectorLanguage from "./oc-selector-language";


export default function OcLanguage(){
  const t = useTranslations("INSERTAR");
  const locale = useLocale();
  return(
    <OcSelectorLanguage
      defaultValue={locale}
      items={[
        {
          value: "en",
          label: t("en"),
        },
        {
          value: "es",
          label: t("es"),
        },
      ]}
      label={t("label")}
    />
  ) 
}

