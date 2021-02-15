import { StringMap, TFunctionKeys, TFunctionResult, TOptions } from "i18next";
import { TranslationKeys } from "./setup-i18next";

export interface TFunction {
  // basic usage
  <
    TResult extends TFunctionResult = string,
    TKeys extends TFunctionKeys = string,
    TInterpolationMap extends object = StringMap
  >(
    key: TKeys | TKeys[],
    options?: TOptions<TInterpolationMap> | string
  ): TResult;
  // overloaded usage
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

const originalT: TFunction = null as any;

originalT("key");
originalT(["key1","key2"]);



// becomes...
export interface CustomT {
  (key: TranslationKeys, options?: TOptions<StringMap>): string;
  (key: TranslationKeys, defaultValue?: string, options?: TOptions<StringMap>): string;
}

const customT: CustomT = null as any;

customT("hello")

