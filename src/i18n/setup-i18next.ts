import i18n, {StringMap, TFunctionKeys, TFunctionResult, TOptions} from "i18next";
import {initReactI18next} from "react-i18next";

export const enTranslations = {
    about: "This is a test app",
    hello: "Hello Nils",
};

export type TranslationKeys = keyof typeof enTranslations;

export const deTranslations: Record<TranslationKeys, string> = {
    about: "Das ist eine Test-App",
    hello: "Hallo Nils",
};


// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {translation: enTranslations},
    de: {translation: deTranslations},
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export interface TFunction {
    // basic usage
    <TResult extends TFunctionResult = string,
        TKeys extends TFunctionKeys = string,
        TInterpolationMap extends object = StringMap>(
        key: TKeys | TKeys[],
        options?: TOptions<TInterpolationMap> | string,
    ): TResult;

    // overloaded usage
    <TResult extends TFunctionResult = string,
        TKeys extends TFunctionKeys = string,
        TInterpolationMap extends object = StringMap>(
        key: TKeys | TKeys[],
        defaultValue?: string,
        options?: TOptions<TInterpolationMap> | string,
    ): TResult;
}

export const translate = i18n.t.bind(i18n)
