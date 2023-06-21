import React from "react";
import "../scss/histry.scss";
import { useTranslation } from "react-i18next";
const Histries = () => {
  const { t } = useTranslation();

  return (
    <>
      <section id="histry">
        <div className="container">
          <div className="heading" data-aos="fade-up">
            <h1> {t("nous.histry.h1")}</h1>
          </div>

          <p data-aos="fade-up">{t("nous.histry.p1")}</p>
          <p data-aos="fade-up"> {t("nous.histry.p2")}</p>
          <p data-aos="fade-up">{t("nous.histry.p3")}</p>
        </div>
      </section>
    </>
  );
};

export default Histries;
