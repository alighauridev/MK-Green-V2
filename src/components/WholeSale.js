import React from "react";
import "../scss/wholesale.scss";
import { useTranslation } from "react-i18next";
const WholeSale = ({ reverse, img, heading, description, list }) => {
  const { t } = useTranslation();
  
  
  return (
    <>
      <section id="wholesale">
        <div className="container">
          <div
            className="img"
            data-aos="fade-up"
            style={
              reverse
                ? { order: "2", paddingLeft: "30px", paddingRight: "0" }
                : {}
            }
          >
            <img src={img} alt={heading} />
          </div>
          <div className="content">
            <h2 data-aos="fade-up">{heading}</h2>
            <p data-aos="fade-up">{description}</p>
            {list && (
              <ul data-aos="fade-up">
                <li>{t("WholeSalePage.WholeSale.list.l1")}</li>
                <li>{t("WholeSalePage.WholeSale.list.l2")}</li>
                <li>{t("WholeSalePage.WholeSale.list.l3")}</li>
                <li>{t("WholeSalePage.WholeSale.list.l4")}</li>
                <li>{t("WholeSalePage.WholeSale.list.l5")}</li>
                <li>{t("WholeSalePage.WholeSale.list.l6")}</li>
                <li>{t("WholeSalePage.WholeSale.list.l7")}</li>
                <li>{t("WholeSalePage.WholeSale.list.l8")}</li>
                <li>{t("WholeSalePage.WholeSale.list.l9")}</li>
              </ul>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default WholeSale;
