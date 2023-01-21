import i18n from "i18next";

export const Role = Object.freeze({
  MEMBER: 1,
  ADMIN: 2,
  SUPER_ADMIN: 3,
  PENDING: 4,
  DEACTIVATED: 5,
});

export const isSuperAdmin = (context) => {
  return Role.SUPER_ADMIN === context?.adminInfo?.contest?.role;
};

const VALID_LANGUAGES = ["ar", "en"];

export const changeLanguage = (language) => {
  if (VALID_LANGUAGES.includes(language)) {
    i18n.changeLanguage("en");
    // localStorage.setItem("lang", language);
    // document.documentElement.setAttribute("lang", newLang);
    // setLanguage({ lang: newLang });
  }
};
