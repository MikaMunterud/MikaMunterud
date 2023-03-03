import { useTranslation } from "react-i18next";
import { ImGithub } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import IconLink from "../components/IconLink";
import { useEffect, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import "../scss/Footer.scss";

export default function Footer() {
  const [year, setYear] = useState("");
  const { t } = useTranslation();

  useEffect(function () {
    setYear(new Date().getFullYear());
  }, []);

  function smoothScroll(id) {
    const element = document.querySelector(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <section className="profileSection" id="footer">
      <div className="arrowUp" onClick={scrollToTop}>
        {<RiArrowUpSLine />}
      </div>
      <div className="icons">
        <IconLink
          link={"https://www.linkedin.com/in/mikamunterud94/"}
          linkText={t("linkedInLink")}
          icon={<SiLinkedin />}
        />
        <IconLink
          link={"https://github.com/MikaMunterud"}
          linkText={t("githubLink")}
          icon={<ImGithub />}
        />

        <IconLink
          link={"https://www.instagram.com/onegirlexploringtheworld/"}
          linkText={t("instagramLink")}
          icon={<SiInstagram />}
        />

        <HiOutlineMail
          className="mail"
          onClick={function () {
            if (window.innerWidth > 900) {
              smoothScroll("#contact");
            } else {
              smoothScroll("#mailDiv");
            }
          }}
        />
      </div>
      <p>© Copyright {year} Mika Munterud</p>
    </section>
  );
}
