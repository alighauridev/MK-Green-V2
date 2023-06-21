import React from "react";
import "../scss/about.scss";
import { about } from "../assests/data";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import img1 from "../assests/Icons/1.png";
import img2 from "../assests/Icons/2.png";
import img3 from "../assests/Icons/3.png";
import img4 from "../assests/Icons/4.png";
const About = ({ isDisplay }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="heading" data-aos="fade-up">
            <h1>{t("HomePage.About.h1")}</h1>
          </div>
          <div className="content" data-aos="fade-up">
            <div className="box">
              <div className="i">
                <img src={img1} alt="" />
              </div>
              <div className="content-box">
                <h2>{t("HomePage.About.bh1")}</h2>
                <p>{t("HomePage.About.p1")}</p>
              </div>
            </div>
            <div className="box">
              <div className="i">
                <img src={img4} alt="" />
              </div>
              <div className="content-box">
              <h2>{t("HomePage.About.bh2")}</h2>
                <p>{t("HomePage.About.p2")}</p>
              </div>
            </div>
            <div className="box">
              <div className="i">
                <img src={img3} alt="" />
              </div>
              <div className="content-box">
              <h2>{t("HomePage.About.bh3")}</h2>
                <p>{t("HomePage.About.p3")}</p>
              </div>
            </div>
            <div className="box">
              <div className="i">
                <img src={img2} alt="" />
              </div>
              <div className="content-box">
              <h2>{t("HomePage.About.bh4")}</h2>
                <p>{t("HomePage.About.p4")}</p>
              </div>
            </div>
          </div>
          <div
            className="btn"
            data-aos="fade-up"
            style={isDisplay ? { display: "none" } : { display: "block" }}
          >
            <Link to="/contact">{t("HomePage.About.btn")}</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
