import { useTranslation } from "react-i18next";
import Education from "../components/Education";
import Employments from "../components/Employments";
import Skills from "../components/Skills";
import "../scss/Resume.scss";

export default function Resume() {
  const { t } = useTranslation();

  return (
    <section className="profileSection" id="resume">
      <Education t={t} />
      <Employments t={t} />
      <Skills t={t} />
    </section>
  );
}
