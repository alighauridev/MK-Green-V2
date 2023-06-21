import React from "react";
import img1 from "../assests/q.1.png";
import img2 from "../assests/q.2.png";
import icon from "../assests/icon.png";
import Aos from "aos";
import "../scss/quality.scss";
import { useTranslation } from "react-i18next";

const Quality = ({ isDisplay }) => {
  const { t } = useTranslation();
  return (
    <>
      <section id="quality">
        <div className="container">

          <div className="heading" data-aos="fade-up">
            <h1>{t('HomePage.Quality.h1')}</h1>
          </div>
          <div className="content">
            <div className="img" data-aos="fade-up">
              <img src={icon} alt="quality" />
              <div className="im-box">
                <img src={img1} alt="q1" />
                <img src={img2} alt="q2" />
              </div>
            </div>
            <div className="box" data-aos="fade-up">
              <p>
                {t('HomePage.Quality.p1')}</p>
              <p>{t('HomePage.Quality.p2')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quality;
