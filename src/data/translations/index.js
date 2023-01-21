import loginEn from "./login.i18n.en";
import loginAr from "./login.i18n.ar";
console.log(loginEn);
export default {
  en: {
    translation: {
      ...loginEn,
    },
  },
  ar: {
    translation: {
      ...loginAr,
    },
  },
};
