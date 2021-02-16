interface TranslationSchema {
  "summaryPage.header": string;
  "summaryPage.footer": string;
}
export type TranslationKey = keyof TranslationSchema;


export const enTranslations: TranslationSchema = {
  "summaryPage.header": "Wikipedia Viewer",
  "summaryPage.footer": "Footer",
};

export const deTranslations: TranslationSchema = {
  "summaryPage.header": "Wikipedia Betrachter",
  "summaryPage.footer": "Fußzeile",
};
