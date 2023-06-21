import React from "react";
import aides from "../assests/aides11.png";
import "../scss/aides.scss";
import { useTranslation } from "react-i18next";

const Aides = () => {
  const { t } = useTranslation();
  return (
    <>
      <section id="aides">
        <div className="container">
          <div className="heading" data-aos="fade-up">
            <h1>{t('HomePage.Aides.h1')}</h1>
            <h1>{t('HomePage.Aides.h2')}</h1>
          </div>
          <div className="content">
            <div className="img" data-aos="fade-up">
              <img src={aides} alt="aides" />
            </div>
            <div className="para" data-aos="fade-up">
              <p>
                {t('HomePage.Aides.p1')}
              </p>
              <p>
                {t('HomePage.Aides.p2')}
              </p>
              <div className="btn" data-aos="fade-up">
                <a href="https://advenir.mobi/" target="blank_"> {t('HomePage.Aides.btn')}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aides;
