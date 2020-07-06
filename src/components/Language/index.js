import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { saveLangCache, getLangCache } from '../../cache/language'
import { img } from '../../images';

function Language() {

  const [lang, setLang] = useState(getLangCache());
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
    saveLangCache(lang);
  }, [lang, i18n]);

  function onChangeLang() {
    setLang(lang === 'vi' ? 'en' : 'vi');
  }

  return (
    <div className="d-flex align-items-center">
      <img
        src={lang === 'en' ? img.flagEng : img.flagVi}
        style={{ width: 30, height: 20 }}
        alt="language"
        onClick={onChangeLang}
        className="pointer"
      />
    </div>
  )
}

export default Language;