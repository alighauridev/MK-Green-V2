import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('fr'); // Set French as default on component mount
  }, [i18n]);

  const changeLanguage = (e) => {
    const lng = e.target.value;
    i18n.changeLanguage(lng);
  };

  const selectStyle = {
    padding: '4px 15px',
    border: '0px solid rgb(204, 204, 204)',
    borderRadius: '4px',
    fontSize: '16px',
    color: 'rgb(68, 68, 68)'
  };

  return (
    <div>
      <select
        style={selectStyle}
        onChange={changeLanguage}
        defaultValue="fr"
      >
        <option value="en" style={{ color: "black" }}>English</option>
        <option value="fr" style={{ color: "black" }}>Français</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;
