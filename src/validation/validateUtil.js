import i18n from "../i18n";

function checkEmail(email) {
  if (!email) return i18n.t('empty');
  return '';
}

function checkPassword(password) {
  if (!password) return i18n.t('empty');
  return '';
}

export {
  checkEmail,
  checkPassword,
}