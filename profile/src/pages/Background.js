import { useTranslation } from "react-i18next";
import { ImGithub } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import { RiArrowDownSLine } from "react-icons/ri";
import Aos from "aos";
import "../scss/Background.scss";
import IconLink from "../components/IconLink";
import { useEffect } from "react";

export default function Background() {
  const { t } = useTranslation();

  function smoothScroll(id) {
    const element = document.querySelector(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  useEffect(function () {
    Aos.init();
  }, []);

  return (
    <section id="background">
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="1500"
        className="welcomePresentation"
      >
        <h1>{t("welcome")}</h1>
        <p>
          {" "}
          {t("welcome_text1")} <strong> Mika Munterud </strong>{" "}
          {t("welcome_text2")}{" "}
          <strong> {t("program")} Fullstack Open Source</strong>{" "}
          {t("welcome_text3")}
        </p>
        <p>
          {t("welcome_text4")}
          <strong> {t("lia")}</strong> {t("welcome_text5")}{" "}
          <strong>{t("welcome_text6")}</strong> {t("welcome_text7")}{" "}
          <strong> {t("welcome_text8")}</strong>.
        </p>
        <p className="icons">
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
              smoothScroll("#contact");
            }}
          />
        </p>
      </div>
      <div
        className="arrowDown"
        onClick={function () {
          smoothScroll("#about");
        }}
      >
        {<RiArrowDownSLine />}
      </div>
    </section>
  );
}
