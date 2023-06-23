import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { nav } from "../assests/data";
import "../scss/navigation.scss";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineBars3 } from "react-icons/hi2";
import logo from "../assests/Icons/logo.1.png";
import { ArrowUpward } from "@material-ui/icons";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
const Navigation = ({}) => {
  const [navToggler, setNavToggler] = useState(false);
  const [color, setColor] = useState(false);
  const [translate, setTranslate] = useState(false);
  const [nave, setNave] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [border, setBorder] = useState(false);
  const { t } = useTranslation();
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });
  console.log(translate);
  return (
    <>
      <header>
        <div className="outer">
          <div className="container">
            <div className="nav__grid">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <nav>
                <div className="nav-wrap">
                  <ul style={nave ? { transform: "translateX(0%) " } : {}}>
                    <div className="nav-logo-side">
                      <Link to={"/"}>
                        <img src={logo} alt="logo" />
                      </Link>
                    </div>

                    <li window>
                      <Link
                        onClick={() => window.scroll(0, 0)}
                        to={"/professionel-page"}
                      >
                        {t("HomePage.navigation.n1")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => window.scroll(0, 0)}
                        to={"/particuliers-page"}
                      >
                        {t("HomePage.navigation.n2")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => window.scroll(0, 0)}
                        to={"/nous-page"}
                      >
                        {t("HomePage.navigation.n3")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => window.scroll(0, 0)}
                        to={"/whole-sale-page"}
                      >
                        {t("HomePage.navigation.n4")}
                      </Link>
                    </li>

                    <li>
                      <a
                        target="blank_"
                        onClick={() => window.scroll(0, 0)}
                        href="https://advenir.mobi"
                      >
                        Consulter les aides
                      </a>
                    </li>
                    <li className="main-l">
                      <LanguageSwitcher />
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="language">
                <LanguageSwitcher />
              </div>

              <div
                className="bars"
                onClick={() => {
                  setNave(!nave);
                  setColor(!color);
                }}
              >
                {nave ? <RxCross2 /> : <HiOutlineBars3 />}
              </div>
            </div>
          </div>
        </div>
        <div
          className="color"
          onClick={() => {
            setNave(false);
            setColor(false);
          }}
          style={color ? { display: "block" } : { display: "none" }}
        ></div>
      </header>
      <div
        onClick={() => window.scroll(0, 0)}
        className="auto_scroll"
        style={scroll ? { transform: "scale(1)" } : {}}
      >
        <ArrowUpward />
      </div>
    </>
  );
};

export default Navigation;
