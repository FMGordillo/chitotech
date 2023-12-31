import { browser } from "$app/environment";
import { init, register } from "svelte-i18n";
import { readable, writable } from "svelte/store";


export const defaultLocale = "es";

register("en", () => import("./locales/en.json"));
register("es", () => import("./locales/es.json"));

init({
  fallbackLocale: defaultLocale,
  initialLocale: browser ? window.navigator.language : defaultLocale,
});

// @ts-ignore
export const locale = writable("es");
// @ts-ignore
export const locales = ["es", "en"];
