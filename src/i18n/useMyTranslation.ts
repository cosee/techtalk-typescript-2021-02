import {StringMap, TFunctionKeys, TFunctionResult, TOptions} from "i18next";
import {useTranslation} from "react-i18next";
import {TranslationKey} from "src/i18n/translations";

// This is the original type definition for the t()-function of i18next.
// it's pretty complicated and we probably don't need it like that for our use cases.
export interface TFunction {
  <
    TResult extends TFunctionResult = string,
    TKeys extends TFunctionKeys = string,
    TInterpolationMap extends object = StringMap
  >(
    key: TKeys | TKeys[],
    options?: TOptions<TInterpolationMap> | string
  ): TResult;
  <
    TResult extends TFunctionResult = string,
    TKeys extends TFunctionKeys = string,
    TInterpolationMap extends object = StringMap
  >(
    key: TKeys | TKeys[],
    defaultValue?: string,
    options?: TOptions<TInterpolationMap> | string
  ): TResult;
}

// much simpler, and using our types:
export interface CustomT {
  (key: TranslationKey, options?: TOptions): string;
  (key: TranslationKey, defaultValue?: string, options?: TOptions): string;
}

export interface UseMyTranslationResponse {
  t: CustomT;
}

export function useMyTranslation(): UseMyTranslationResponse {
  return useTranslation();
}
