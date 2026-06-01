import productDe from "./de.json";
import productEn from "./en.json";
import productFr from "./fr.json";
import productIt from "./it.json";
import bndDe from "./bnd/de.json";
import bndEn from "./bnd/en.json";
import bndFr from "./bnd/fr.json";
import bndIt from "./bnd/it.json";

export type LocaleId = "en" | "de" | "fr" | "it";

export const DEFAULT_LOCALE: LocaleId = "en";

export const SUPPORTED_LOCALES: readonly LocaleId[] = ["en", "de", "fr", "it"];

function mergeMessages(
  product: typeof productEn,
  bnd: typeof bndEn,
): typeof productEn & typeof bndEn {
  return { ...product, ...bnd };
}

export const en = mergeMessages(productEn, bndEn);
export const de = mergeMessages(productDe, bndDe);
export const fr = mergeMessages(productFr, bndFr);
export const it = mergeMessages(productIt, bndIt);

export type LocaleMessages = typeof en;
