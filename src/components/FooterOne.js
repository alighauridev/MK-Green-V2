import React from "react";
import "../scss/footer.scss";
import { about } from "../assests/data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const FooterOne = ({ img, bgColor, invert }) => {
  const { t } = useTranslation();
  return (
    <>
      <section id="footer-wrapper">
        <section
          id="footer"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
          }}
        >
          <div className="container__" style={{ background: bgColor }}>
            <div className="heading">
              <h1
                data-aos="fade-up"
                style={{
                  color:
                    bgColor === "rgb(255 255 255 / 66%)" ? "#006281" : null,
                }}
              >
                {t('HomePage.FooterOne.h1')}
              </h1>
              <h2
                data-aos="fade-up"
                style={{
                  color:
                    bgColor === "rgb(255 255 255 / 66%)" ? "#006281" : null,
                }}
              >
                {t('HomePage.FooterOne.h2')}
              </h2>
            </div>
            <div className="footer-icons" data-aos="fade-up">
              {about.map((a) => {
                return (
                  <div className="i">
                    <img src={a.i} alt={a.h} />
                  </div>
                );
              })}
            </div>
            {
              invert ? <div className="btn__" data-aos="fade-up">
                <Link
                  Link
                  to="/contact"
                  style={
                    bgColor === "rgb(255 255 255 / 66%)"
                      ? { backgroundColor: "#006281", color: "#fff" }
                      : null
                  }
                >
                  {t('HomePage.FooterOne.btn')}
                </Link>
              </div> : <div className="btn" data-aos="fade-up">
                <Link
                  Link
                  to="/contact"
                  style={
                    bgColor === "rgb(255 255 255 / 66%)"
                      ? { backgroundColor: "#006281", color: "#fff" }
                      : null
                  }
                >
                  {t('HomePage.FooterOne.btn')}
                </Link>
              </div>
            }
          </div>
        </section>
      </section>
    </>
  );
};

export default FooterOne;
