import { useTranslation } from "react-i18next";
import { SlMenu } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";
import "../scss/Nav.scss";
import { useEffect, useState } from "react";

export default function Nav() {
  // It is a hook imported from 'react-i18next'
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("en");
  const [menuList, setMenuList] = useState("");
  const [menu, setMenu] = useState("visible");
  const [cross, setCross] = useState("hide");

  // This sets the language of the page to the chosen language
  useEffect(
    function () {
      i18n.changeLanguage(lang);
    },
    [lang, i18n]
  );

  function toggleMenu(event) {
    event.preventDefault();

    if (menu === "visible") {
      setMenu("hide");
      setCross("visible");
      setMenuList("visible");
    } else {
      hideMenuList();
    }
  }

  function hideMenuList() {
    setCross("hide");
    setMenu("visible");
    setMenuList("");
  }

  function smoothScroll(id) {
    const element = document.querySelector(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  return (
    <nav className="navBar">
      <SlMenu onClick={toggleMenu} className={`menuIcon ${menu}`} />
      <RxCross1 onClick={toggleMenu} className={`menuIcon ${cross}`} />
      <ul className={menuList} onClick={hideMenuList}>
        <li
          onClick={function () {
            smoothScroll("#about");
          }}
        >
          <h1>{t("nav_about")}</h1>
        </li>
        <li
          onClick={function () {
            smoothScroll("#resume");
          }}
        >
          <h1>{t("nav_resume")}</h1>
        </li>
        <li
          onClick={function () {
            smoothScroll("#projects");
          }}
        >
          <h1>{t("nav_projects")}</h1>
        </li>
        <li
          onClick={function () {
            smoothScroll("#contact");
          }}
        >
          <h1>{t("nav_contact")}</h1>
        </li>
      </ul>
      <select
        value={lang}
        onChange={function (event) {
          setLang(event.target.value);

          // handleChange(event);
        }}
      >
        <option value={"en"}>🇬🇧 En</option>
        <option value={"sv"}>🇸🇪 Sv</option>
      </select>
    </nav>
  );
}
