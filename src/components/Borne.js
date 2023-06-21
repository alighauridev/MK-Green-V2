import React from "react";
import "../scss/borne.scss";
import img from "../assests/borne.jpeg";
import { useTranslation } from "react-i18next";
const Borne = () => {
  const { t } = useTranslation();

  return (
    <>
      <section id="borne">
        <div className="container">
          <div className="img" data-aos="fade-up">
            <img src={img} alt="borne" />
          </div>
          <div className="content">
            <div className="heading" data-aos="fade-up">
              <h1>{t("Particuliers.borne.h1")}</h1>
            </div>
            <p data-aos="fade-up">{t("Particuliers.borne.p1")}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Borne;
