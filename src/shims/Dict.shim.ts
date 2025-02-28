/* TypeScript shim for Dict module */
import type { t } from '../Dict.gen';

export const make = <T>(): t<T> => ({});

export const get = <T>(dict: t<T>, key: string): T | undefined => dict[key];

export const set = <T>(dict: t<T>, key: string, value: T): t<T> => {
  dict[key] = value;
  return dict;
};

// Export the type for genType
export type { t };
