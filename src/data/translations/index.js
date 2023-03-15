import loginEn from "./login.i18n.en";
import loginAr from "./login.i18n.ar";
import sharedAR from "./sharedAR.i18n.ar";
import sharedEN from "./sharedEN.i18n.en";
import moderatorsI18nEn from "./moderators.i18n.en";
import moderatorsI18nAr from "./moderators.i18n.ar";
import groupsI18nEn from "./groups.i18n.en";
import groupsI18nAr from "./groups.i18n.ar";
import studentsI18nEn from "./students.i18n.en";
import studentsI18nAr from "./students.i18n.ar";
import contestCriteriaI18nEn from "./contestCriteria.i18n.en";
import contestCriteriaI18nAr from "./contestCriteria.i18n.ar";

console.log(loginEn);

export default {
  en: {
    translation: {
      ...sharedEN,
      ...loginEn,
      ...moderatorsI18nEn,
      ...groupsI18nEn,
      ...studentsI18nEn,
      ...contestCriteriaI18nEn,
    },
  },
  ar: {
    translation: {
      ...sharedAR,
      ...loginAr,
      ...moderatorsI18nAr,
      ...groupsI18nAr,
      ...studentsI18nAr,
      ...contestCriteriaI18nAr,
    },
  },
};
