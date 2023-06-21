import React from "react";
import "../scss/car.scss";
import img from "../assests/Icons/1.png";
import img2 from "../assests/q.2.png";
import { useTranslation } from "react-i18next";
const Car = () => {
  const { t } = useTranslation();
  return (
    <>
      <section id="car">
        <div className="container">
          <div className="heading" data-aos="fade-up">
            <h1>{t("Professionals.Car.h1")}</h1>
          </div>
          <div className="grid-box">
            <div className="img" data-aos="fade-up">
              <img src={img} alt="" />
            </div>
            <div className="content">
              <div className="para" data-aos="fade-up">
                <p>{t("Professionals.Car.p1")}</p>
                <p>{t("Professionals.Car.p2")}</p>
                <p>{t("Professionals.Car.p3")}</p>
              </div>
              <div className="btn" data-aos="fade-up">
                <a href="#"> {t("Professionals.Car.btn1")}</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="parteners">
            <h1 data-aos="fade-up">{t("Professionals.Parteners.h1")}</h1>
            <ul data-aos="fade-up">
              <li className="main">
                {t("Professionals.Parteners.l1")}

                <img src={img2} alt="car" />
              </li>
              <li>{t("Professionals.Parteners.l2")}</li>
              <li>{t("Professionals.Parteners.l3")}</li>
              <li>{t("Professionals.Parteners.l4")}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Car;
