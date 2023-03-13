import loginEn from "./login.i18n.en";
import loginAr from "./login.i18n.ar";
import sharedAR from "./sharedAR.i18n.ar";
import sharedEN from "./sharedEN.i18n.en";
import moderatorsI18nEn from "./moderators.i18n.en";
import moderatorsI18nAr from "./moderators.i18n.ar";
import groupsI18nEn from "./groups.i18n.en";
import groupsI18nAr from "./groups.i18n.ar";

export default {
  en: {
    translation: {
      ...sharedEN,
      ...loginEn,
      ...moderatorsI18nEn,
      ...groupsI18nEn,
    },
  },
  ar: {
    translation: {
      ...sharedAR,
      ...loginAr,
      ...moderatorsI18nAr,
      ...groupsI18nAr,
    },
  },
};
